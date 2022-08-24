import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractRollbarResource} from "../../Rollbar-Common/src/abstract-rollbar-resource";
import {ApiError, RollbarClient} from "../../Rollbar-Common/src/rollbar-client";
import {CaseTransformer, Transformer} from "../../Rollbar-Common/src/util";
import {version} from '../package.json';
import {BaseModel} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";

type Project = {
    id: number
    settings_data: any
    date_created: number
    date_modified: number
}

type ProjectAccessToken = {
    access_token: string
}

class Resource extends AbstractRollbarResource<ResourceModel, Project, Project, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Project> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: Project }>(
            'get',
            `/api/1/project/${model.id}`);

        return response.data.result;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: Project[] }>(
            'get',
            `/api/1/projects`);

        return response.data.result.map(project => this.setModelFrom(new ResourceModel(), project));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Project> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: Project }>(
            'post',
            `/api/1/projects`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform());

        try {
            await this.setProjectConfiguration(model, response.data.result.id.toString(), typeConfiguration);
        } catch (e) {
            await this.delete(new ResourceModel({
                id: response.data.result.id
            }), typeConfiguration);
            throw new Error(`Fail to configure channel notifications for the project.\nSerialized API response: ${JSON.stringify((e as AxiosError<ApiError>).response.data)}`);
        }

        return response.data.result;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await this.setProjectConfiguration(model, model.id.toString(), typeConfiguration);
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest(
            'delete',
            `/api/1/project/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Project): ResourceModel {
        if (!from) {
            return model;
        }

        delete from.settings_data;
        delete from.date_created;
        delete from.date_modified;

        return new ResourceModel({
            id: model.id,
            name: model.name,
            accountId: model.accountId,
            status: model.status,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
    }

    // To configure notifications channels, we need a project access token. When at least one configuration need to be
    // set, this method will:
    // - create a temporary one (with "write" scope)
    // - configure the notification channels based on given model
    // - delete the temporary project access token (not will always happen even if an exception is thrown on the previous step)
    private async setProjectConfiguration(model: ResourceModel, projectId: string, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        const supportedChannels: Array<keyof ResourceModel> = ['slack', 'webhook', 'pagerDuty', 'email'];

        if (!supportedChannels.some(channel => model[channel])) {
            return;
        }

        const rollbarClient = new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent);

        const projectToken = (await rollbarClient.doRequest<{ result: ProjectAccessToken }>(
            'post',
            `/api/1/project/${projectId}/access_tokens`,
            {},
            {
                project_id: parseInt(projectId),
                name: 'TokenForChannelConfigurations',
                scopes: ['write'],
                status: 'enabled'
            })
        ).data.result.access_token;

        const removeProjectToken = async () => rollbarClient.doRequest(
            'delete',
            `/api/1/project/${projectId}/access_token/${projectToken}`);

        try {
            await Promise.all(supportedChannels.filter(channel => !!model[channel])
                .map(channel => rollbarClient.doRequest(
                    'put',
                    `/api/1/notifications/${channel.toLocaleLowerCase()}`,
                    null,
                    Transformer.for((model[channel] as BaseModel).toJSON())
                        .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                        .transform(),
                    {
                        'X-Rollbar-Access-Token': projectToken
                    }
                )));
        } catch (e) {
            await removeProjectToken();
            throw e;
        }

        await removeProjectToken();
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
