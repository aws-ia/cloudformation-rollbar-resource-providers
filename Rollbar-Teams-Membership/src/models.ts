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
    protected readonly IDENTIFIER_KEY_MEMBER: string = '/properties/Member';

    @Expose({ name: 'TeamId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'teamId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    teamId?: Optional<integer>;
    @Expose({ name: 'Member' })
    @Type(() => Member)
    member?: Optional<Member>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.teamId != null) {
            identifier[this.IDENTIFIER_KEY_TEAMID] = this.teamId;
        }

        if (this.member != null) {
            identifier[this.IDENTIFIER_KEY_MEMBER] = this.member;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 2 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class Member extends BaseModel {
    ['constructor']: typeof Member;


    @Expose({ name: 'UserId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'userId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    userId?: Optional<integer>;
    @Expose({ name: 'ProjectId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'projectId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    projectId?: Optional<integer>;

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

