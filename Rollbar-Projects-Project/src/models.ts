// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Rollbar::Projects::Project';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Slack' })
    @Type(() => Slack)
    slack?: Optional<Slack>;
    @Expose({ name: 'Webhook' })
    @Type(() => Webhook)
    webhook?: Optional<Webhook>;
    @Expose({ name: 'PagerDuty' })
    @Type(() => PagerDuty)
    pagerDuty?: Optional<PagerDuty>;
    @Expose({ name: 'Email' })
    @Type(() => Email)
    email?: Optional<Email>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<integer>;
    @Expose({ name: 'AccountId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'accountId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accountId?: Optional<integer>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class Slack extends BaseModel {
    ['constructor']: typeof Slack;


    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'ServiceAccountId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'serviceAccountId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceAccountId?: Optional<integer>;
    @Expose({ name: 'Channel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'channel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    channel?: Optional<string>;
    @Expose({ name: 'ShowMessageButtons' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'showMessageButtons', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    showMessageButtons?: Optional<boolean>;

}

export class Webhook extends BaseModel {
    ['constructor']: typeof Webhook;


    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;

}

export class PagerDuty extends BaseModel {
    ['constructor']: typeof PagerDuty;


    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'ServiceKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'serviceKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    serviceKey?: Optional<string>;

}

export class Email extends BaseModel {
    ['constructor']: typeof Email;


    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'IncludeRequestParams' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'includeRequestParams', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    includeRequestParams?: Optional<boolean>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'RollbarAccess' })
    @Type(() => RollbarAccess)
    rollbarAccess?: Optional<RollbarAccess>;

}

export class RollbarAccess extends BaseModel {
    ['constructor']: typeof RollbarAccess;


    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;

}

