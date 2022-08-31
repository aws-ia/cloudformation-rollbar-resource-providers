# Rollbar::Notifications::Rule

Manage a notification rule for Rollbar.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Rollbar::Notifications::Rule",
    "Properties" : {
        "<a href="#projectaccesstoken" title="ProjectAccessToken">ProjectAccessToken</a>" : <i>String</i>,
        "<a href="#slack" title="Slack">Slack</a>" : <i><a href="slackrule.md">SlackRule</a></i>,
        "<a href="#pagerduty" title="PagerDuty">PagerDuty</a>" : <i><a href="pagerdutyrule.md">PagerDutyRule</a></i>,
        "<a href="#email" title="Email">Email</a>" : <i><a href="emailrule.md">EmailRule</a></i>,
        "<a href="#webhook" title="Webhook">Webhook</a>" : <i><a href="webhookrule.md">WebhookRule</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Notifications::Rule
Properties:
    <a href="#projectaccesstoken" title="ProjectAccessToken">ProjectAccessToken</a>: <i>String</i>
    <a href="#slack" title="Slack">Slack</a>: <i><a href="slackrule.md">SlackRule</a></i>
    <a href="#pagerduty" title="PagerDuty">PagerDuty</a>: <i><a href="pagerdutyrule.md">PagerDutyRule</a></i>
    <a href="#email" title="Email">Email</a>: <i><a href="emailrule.md">EmailRule</a></i>
    <a href="#webhook" title="Webhook">Webhook</a>: <i><a href="webhookrule.md">WebhookRule</a></i>
</pre>

## Properties

#### ProjectAccessToken

Use a Project Access Token with 'write' scope. This determines onto to which project the rule will be created

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Slack

Create Slack notification rule

_Required_: No

_Type_: <a href="slackrule.md">SlackRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PagerDuty

Create PagerDuty notification rules

_Required_: No

_Type_: <a href="pagerdutyrule.md">PagerDutyRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Email

Create Email notification rules

_Required_: No

_Type_: <a href="emailrule.md">EmailRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Webhook

Create Webhook notification rules

_Required_: No

_Type_: <a href="webhookrule.md">WebhookRule</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The rule ID

#### Trigger

The trigger associated with this rule

#### Action

The action associated with this rule

#### RuleType

the rule type

