// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Rollbar::Teams::Membership';

    @Exclude()
    protected readonly IDENTIFIER_KEY_TEAMID: string = '/properties/TeamId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_MEMBERID: string = '/properties/MemberId';
    @Exclude()
    protected readonly IDENTIFIER_KEY_MEMBERTYPE: string = '/properties/MemberType';

    @Expose({ name: 'TeamId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'teamId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    teamId?: Optional<integer>;
    @Expose({ name: 'MemberId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'memberId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    memberId?: Optional<integer>;
    @Expose({ name: 'MemberType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'memberType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    memberType?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.teamId != null) {
            identifier[this.IDENTIFIER_KEY_TEAMID] = this.teamId;
        }

        if (this.memberId != null) {
            identifier[this.IDENTIFIER_KEY_MEMBERID] = this.memberId;
        }

        if (this.memberType != null) {
            identifier[this.IDENTIFIER_KEY_MEMBERTYPE] = this.memberType;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 3 ? identifier : null;
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
    @Expose({ name: 'ProjectToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'projectToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    projectToken?: Optional<string>;

}

