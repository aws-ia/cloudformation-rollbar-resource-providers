# Rollbar::Notifications::Rule NonActionableConfig

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#messagetemplate" title="MessageTemplate">MessageTemplate</a>" : <i>String</i>,
    "<a href="#channel" title="Channel">Channel</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#messagetemplate" title="MessageTemplate">MessageTemplate</a>: <i>String</i>
<a href="#channel" title="Channel">Channel</a>: <i>String</i>
</pre>

## Properties

#### MessageTemplate

Define a custom template for the Slack message. More information here https://docs.rollbar.com/docs/slack#section-tips-tricks

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Channel

The Slack channel to send the messages

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

