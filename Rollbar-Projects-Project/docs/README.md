# Rollbar::Projects::Project

Manage a project on Rollbar.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Rollbar::Projects::Project",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#slack" title="Slack">Slack</a>" : <i><a href="slack.md">Slack</a></i>,
        "<a href="#webhook" title="Webhook">Webhook</a>" : <i><a href="webhook.md">Webhook</a></i>,
        "<a href="#pagerduty" title="PagerDuty">PagerDuty</a>" : <i><a href="pagerduty.md">PagerDuty</a></i>,
        "<a href="#email" title="Email">Email</a>" : <i><a href="email.md">Email</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Projects::Project
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#slack" title="Slack">Slack</a>: <i><a href="slack.md">Slack</a></i>
    <a href="#webhook" title="Webhook">Webhook</a>: <i><a href="webhook.md">Webhook</a></i>
    <a href="#pagerduty" title="PagerDuty">PagerDuty</a>: <i><a href="pagerduty.md">PagerDuty</a></i>
    <a href="#email" title="Email">Email</a>: <i><a href="email.md">Email</a></i>
</pre>

## Properties

#### Name

Name of the project. Must start with a letter; can contain letters, numbers, spaces, underscores, hyphens, periods, and commas. Max length 32 characters.

_Required_: Yes

_Type_: String

_Pattern_: <code>^[a-zA-Z][\w\_\-\.\,]{0,31}$</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Slack

Configuring Slack notifications integration.

_Required_: No

_Type_: <a href="slack.md">Slack</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Webhook

Configuring Webhook notifications integration.

_Required_: No

_Type_: <a href="webhook.md">Webhook</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### PagerDuty

Configuring PagerDuty notifications integration.

_Required_: No

_Type_: <a href="pagerduty.md">PagerDuty</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Email

Configuring Email notifications integration.

_Required_: No

_Type_: <a href="email.md">Email</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The project ID.

#### AccountId

The account ID where the project belongs to.

#### Status

Whether or not this project is enabled.

