// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Rollbar::Notifications::Rule';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';
    @Exclude()
    protected readonly IDENTIFIER_KEY_RULETYPE: string = '/properties/RuleType';

    @Expose({ name: 'ProjectAccessToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'projectAccessToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    projectAccessToken?: Optional<string>;
    @Expose({ name: 'Slack' })
    @Type(() => SlackRule)
    slack?: Optional<SlackRule>;
    @Expose({ name: 'PagerDuty' })
    @Type(() => EmailRule)
    pagerDuty?: Optional<EmailRule>;
    @Expose({ name: 'Email' })
    @Type(() => EmailRule)
    email?: Optional<EmailRule>;
    @Expose({ name: 'Webhook' })
    @Type(() => WebhookRule)
    webhook?: Optional<WebhookRule>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'RuleType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ruleType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ruleType?: Optional<string>;

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
        if (this.getIdentifier_RuleType() != null) {
            identifiers.push(this.getIdentifier_RuleType());
        }
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }

    @Exclude()
    public getIdentifier_RuleType(): Dict {
        const identifier: Dict = {};
        if ((this as any).ruleType != null) {
            identifier[this.IDENTIFIER_KEY_RULETYPE] = (this as any).ruleType;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }
}

export class SlackRule extends BaseModel {
    ['constructor']: typeof SlackRule;


    @Expose({ name: 'Trigger' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'trigger', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trigger?: Optional<string>;
    @Expose({ name: 'Filters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'filters', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    filters?: Optional<Set<object>>;
    @Expose({ name: 'Action' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'action', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    action?: Optional<string>;
    @Expose({ name: 'Config' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'config', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    config?: Optional<object>;

}

export class EnvironmentFilter extends BaseModel {
    ['constructor']: typeof EnvironmentFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class LevelFilter extends BaseModel {
    ['constructor']: typeof LevelFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class TitleFilter extends BaseModel {
    ['constructor']: typeof TitleFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class FilenameFilter extends BaseModel {
    ['constructor']: typeof FilenameFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class ContextFilter extends BaseModel {
    ['constructor']: typeof ContextFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class MethodFilter extends BaseModel {
    ['constructor']: typeof MethodFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class FrameworkFilter extends BaseModel {
    ['constructor']: typeof FrameworkFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class PathFilter extends BaseModel {
    ['constructor']: typeof PathFilter;


    @Expose({ name: 'Path' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'path', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    path?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class PathWithExistsFilter extends BaseModel {
    ['constructor']: typeof PathWithExistsFilter;


    @Expose({ name: 'Path' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'path', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    path?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class UniqueOccurrencesFilter extends BaseModel {
    ['constructor']: typeof UniqueOccurrencesFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Operation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'operation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    operation?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<number>;

}

export class RateFilter extends BaseModel {
    ['constructor']: typeof RateFilter;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Period' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'period', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    period?: Optional<number>;
    @Expose({ name: 'Count' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'count', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    count?: Optional<number>;

}

export class ActionableConfig extends BaseModel {
    ['constructor']: typeof ActionableConfig;


    @Expose({ name: 'MessageTemplate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'messageTemplate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    messageTemplate?: Optional<string>;
    @Expose({ name: 'ShowMessageButton' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'showMessageButton', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    showMessageButton?: Optional<boolean>;
    @Expose({ name: 'Channel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'channel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    channel?: Optional<string>;

}

export class NonActionableConfig extends BaseModel {
    ['constructor']: typeof NonActionableConfig;


    @Expose({ name: 'MessageTemplate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'messageTemplate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    messageTemplate?: Optional<string>;
    @Expose({ name: 'Channel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'channel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    channel?: Optional<string>;

}

export class EmailRule extends BaseModel {
    ['constructor']: typeof EmailRule;


    @Expose({ name: 'Trigger' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'trigger', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trigger?: Optional<string>;
    @Expose({ name: 'Filters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'filters', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    filters?: Optional<Set<object>>;
    @Expose({ name: 'Action' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'action', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    action?: Optional<string>;
    @Expose({ name: 'Config' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'config', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    config?: Optional<object>;

}

export class EmailConfig extends BaseModel {
    ['constructor']: typeof EmailConfig;


    @Expose({ name: 'Teams' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'teams', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    teams?: Optional<Set<string>>;
    @Expose({ name: 'Users' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'users', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    users?: Optional<Set<string>>;

}

export class EmailDailySummaryConfig extends BaseModel {
    ['constructor']: typeof EmailDailySummaryConfig;


    @Expose({ name: 'Teams' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'teams', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    teams?: Optional<Set<string>>;
    @Expose({ name: 'Users' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'users', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    users?: Optional<Set<string>>;
    @Expose({ name: 'SummaryTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'summaryTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    summaryTime?: Optional<integer>;
    @Expose({ name: 'SendOnlyIfData' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'sendOnlyIfData', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sendOnlyIfData?: Optional<boolean>;
    @Expose({ name: 'Environments' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'environments', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    environments?: Optional<Set<string>>;
    @Expose({ name: 'MinItemLevel' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'minItemLevel', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    minItemLevel?: Optional<string>;

}

export class WebhookRule extends BaseModel {
    ['constructor']: typeof WebhookRule;


    @Expose({ name: 'Trigger' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'trigger', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trigger?: Optional<string>;
    @Expose({ name: 'Filters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'filters', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    filters?: Optional<Set<object>>;
    @Expose({ name: 'Action' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'action', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    action?: Optional<string>;
    @Expose({ name: 'Config' })
    @Type(() => WebhookConfig)
    config?: Optional<WebhookConfig>;

}

export class WebhookConfig extends BaseModel {
    ['constructor']: typeof WebhookConfig;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'Format' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'format', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    format?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;



}

