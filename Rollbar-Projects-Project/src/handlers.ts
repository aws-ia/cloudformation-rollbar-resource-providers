import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractRollbarResource} from "../../Rollbar-Common/src/abstract-rollbar-resource";
import {RollbarClient} from "../../Rollbar-Common/src/rollbar-client";
import {CaseTransformer, Transformer} from "../../Rollbar-Common/src/util";
import {version} from '../package.json';

type Project = {
    settings_data: any
    date_created: number
    date_modified: number
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
        return response.data.result;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        throw new Error('Update not supported');
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
