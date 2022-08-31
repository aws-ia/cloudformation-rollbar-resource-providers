import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractRollbarResource} from "../../Rollbar-Common/src/abstract-rollbar-resource";
import {RollbarClient} from "../../Rollbar-Common/src/rollbar-client";
import {CaseTransformer, Transformer} from "../../Rollbar-Common/src/util";
import {AxiosError} from "axios";
import {version} from '../package.json';

type ProjectAccessToken = {
    access_token: string
    cur_rate_limit_window_start: number
    cur_rate_limit_window_count: number
    date_created: number
    date_modified: number
}

class Resource extends AbstractRollbarResource<ResourceModel, ProjectAccessToken, ProjectAccessToken, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ProjectAccessToken> {
        // Because there is no get endpoint, we are using the list endpoint + simulating a 404 response to trigger
        // the right behaviour, if the resource is not found within the list.
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: ProjectAccessToken[] }>(
            'get',
            `/api/1/project/${model.projectId}/access_tokens`);

        const foundProjectAccessToken = response.data.result.find(projectAccessToken => projectAccessToken.access_token === model.accessToken);

        if (foundProjectAccessToken) {
            return foundProjectAccessToken;
        }

        const axiosError = new AxiosError('Resource not found from list');
        axiosError.status = '404';
        throw axiosError;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: ProjectAccessToken[] }>(
            'get',
            `/api/1/project/${model.projectId}/access_tokens`);

        return response.data.result.map(projectAccessToken => this.setModelFrom(new ResourceModel(), projectAccessToken));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ProjectAccessToken> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: ProjectAccessToken }>(
            'post',
            `/api/1/project/${model.projectId}/access_tokens`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform());
        return response.data.result;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: ProjectAccessToken }>(
            'patch',
            `/api/1/project/${model.projectId}/access_token/${model.accessToken}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform());
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest(
            'delete',
            `/api/1/project/${model.projectId}/access_token/${model.accessToken}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ProjectAccessToken): ResourceModel {
        if (!from) {
            return model;
        }

        delete from.cur_rate_limit_window_start;
        delete from.cur_rate_limit_window_count;
        delete from.date_created;
        delete from.date_modified;

        return new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
        });
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
