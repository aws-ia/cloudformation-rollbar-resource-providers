# Rollbar::Notifications::Rule WebhookConfig

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#url" title="Url">Url</a>" : <i>String</i>,
    "<a href="#format" title="Format">Format</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#url" title="Url">Url</a>: <i>String</i>
<a href="#format" title="Format">Format</a>: <i>String</i>
</pre>

## Properties

#### Url

Defines a webhook url for this specific rule

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Format

Request/response format can be JSON or XML

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

