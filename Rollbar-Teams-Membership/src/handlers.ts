import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractRollbarResource} from "../../Rollbar-Common/src/abstract-rollbar-resource";
import {RollbarClient} from "../../Rollbar-Common/src/rollbar-client";
import {CaseTransformer, Transformer} from "../../Rollbar-Common/src/util";
import {version} from '../package.json';
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";

type Membership = {
    team_id: number
    user_id?: number
    project_id?: number
}

class Resource extends AbstractRollbarResource<ResourceModel, Membership, Membership, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Membership> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: Membership }>(
            'get',
            this.getUrl(model));

        return response.data.result;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: Membership[] }>(
            'get',
            `/api/1/team/${model.teamId}/${this.getMode(model)}s`);

        return response.data.result.map(membership => this.setModelFrom(new ResourceModel({
            teamId: membership.team_id,
            member: {
                userId: membership.user_id,
                projectId: membership.project_id
            }
        }), membership));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Membership> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest<{ result: Membership }>(
            'put',
            this.getUrl(model));

        return response.data.result;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        throw new exceptions.NotUpdatable();
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new RollbarClient(typeConfiguration.rollbarAccess.token, this.userAgent).doRequest(
            'delete',
            this.getUrl(model));
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Membership): ResourceModel {
        return model;
    }

    private getMode(model: ResourceModel) {
        if (model.member?.userId) {
            return 'user';
        }
        if (model.member.projectId) {
            return 'project';
        }
        throw new Error('Membership not supported');
    }

    private getUrl(model: ResourceModel) {
        if (model.member?.userId) {
            return `/api/1/team/${model.teamId}/user/${model.member.userId}`
        }
        if (model.member?.projectId) {
            return `/api/1/team/${model.teamId}/project/${model.member.projectId}`
        }
        throw new Error('Membership not supported');
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint; 