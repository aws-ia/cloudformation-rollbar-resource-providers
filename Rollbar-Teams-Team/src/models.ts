// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Rollbar::Teams::Team';

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
    @Expose({ name: 'AccessLevel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessLevel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessLevel?: Optional<string>;
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

