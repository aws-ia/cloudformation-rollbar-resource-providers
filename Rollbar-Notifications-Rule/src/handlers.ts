import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractRollbarResource} from "../../Rollbar-Common/src/abstract-rollbar-resource";
import {RollbarClient} from "../../Rollbar-Common/src/rollbar-client";
import {CaseTransformer, Transformer} from "../../Rollbar-Common/src/util";
import {version} from '../package.json';
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";

type Rule = {
    id: number
    trigger: string
    action: string
    filters: []
}

class Resource extends AbstractRollbarResource<ResourceModel, Rule, Rule, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Rule> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.projectToken, this.userAgent).doRequest<{ result: Rule }>(
            'get',
            `/api/1/notifications/${model.ruleType}/rule/${model.id}`);

        return response.data.result;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.projectToken, this.userAgent).doRequest<{ result: Rule[] }>(
            'get',
            `/api/1/notifications/${model.ruleType}/rules`);

        return response.data.result.map(project => this.setModelFrom(model, project));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Rule> {
        const response = await new RollbarClient(typeConfiguration.rollbarAccess.projectToken, this.userAgent).doRequest<{ result: Rule[] }>(
            'post',
            `/api/1/notifications/${this.getRuleType(model)}/rules`,
            {},
            [
                this.getPayload(model)
            ]);
        return response.data.result[0];
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new RollbarClient(typeConfiguration.rollbarAccess.projectToken, this.userAgent).doRequest<{ result: Rule }>(
            'put',
            `/api/1/notifications/${this.getRuleType(model)}/rule/${model.id}`,
            {},
            this.getPayload(model));
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new RollbarClient(typeConfiguration.rollbarAccess.projectToken, this.userAgent).doRequest(
            'delete',
            `/api/1/notifications/${this.getRuleType(model)}/rule/${model.id}`);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Rule): ResourceModel {
        if (!from) {
            delete model.slack;
            delete model.email;
            delete model.pagerDuty;
            delete model.webhook;
            this.validateModel(model);
            return model;
        }

        let ruleType;
        try {
            ruleType = this.getRuleType(model);
        } catch (e) {
            ruleType = model.ruleType;
        }

        const resourceModel = new ResourceModel({
            ...model,
            id: from.id,
            trigger: from.trigger,
            action: from.action,
            ruleType: ruleType
        });
        delete resourceModel.slack;
        delete resourceModel.email;
        delete resourceModel.pagerDuty;
        delete resourceModel.webhook;
        this.validateModel(resourceModel);

        return resourceModel;
    }

    private validateModel(model: ResourceModel): void {
        if (!model.getPrimaryIdentifier()) {
            throw new exceptions.ServiceInternalError(`Rollbar API returned a success status but not expected primary identifier. The resource probably exists and would require a manual check and delete. Please try again as the error might be intermittent.`);
        }
    }

    private assertModel(model: ResourceModel) {
        const availableConfigs = ['Slack', 'PagerDuty', 'Email', 'Webhook'];
        const configsSet = availableConfigs.filter(k => model.toJSON().hasOwnProperty(k));
        if (configsSet.length > 1) {
            throw new exceptions.InvalidRequest(`More than one configurations are set [${configsSet}]. Please specify only one.`);
        }
        if (configsSet.length === 0) {
            throw new exceptions.InvalidRequest(`No configurations are set. Please specify only one from [${availableConfigs}]`);
        }
    }

    private getRuleType(model: ResourceModel) {
        if (model.ruleType) {
            return model.ruleType;
        }

        this.assertModel(model);

        if (model.slack) {
            return 'slack';
        }
        if (model.pagerDuty) {
            return 'pagerduty';
        }
        if (model.email) {
            return 'email';
        }
        if (model.webhook) {
            return 'webhook';
        }
        throw new exceptions.InvalidRequest('Impossible to determine the rule type');
    }

    private getPayload(model: ResourceModel) {
        switch (this.getRuleType(model)) {
            case 'slack':
                return Transformer.for(model.slack.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform();
            case 'pagerduty':
                return Transformer.for(model.pagerDuty.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform();
            case 'email':
                return Transformer.for(model.email.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform();
            case 'webhook':
                return Transformer.for(model.webhook.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                    .transform();
        }
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;