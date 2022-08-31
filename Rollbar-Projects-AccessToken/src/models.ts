// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Rollbar::Projects::AccessToken';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ACCESSTOKEN: string = '/properties/AccessToken';

    @Expose({ name: 'ProjectId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'projectId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    projectId?: Optional<integer>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Scopes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'scopes', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    scopes?: Optional<Set<string>>;
    @Expose({ name: 'RateLimitWindowSize' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'rateLimitWindowSize', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rateLimitWindowSize?: Optional<integer>;
    @Expose({ name: 'RateLimitWindowCount' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'rateLimitWindowCount', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rateLimitWindowCount?: Optional<integer>;
    @Expose({ name: 'AccessToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessToken?: Optional<string>;
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
        if (this.accessToken != null) {
            identifier[this.IDENTIFIER_KEY_ACCESSTOKEN] = this.accessToken;
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

