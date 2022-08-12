# Rollbar::Projects::Project Slack

Configuring Slack notifications integration.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
    "<a href="#serviceaccountid" title="ServiceAccountId">ServiceAccountId</a>" : <i>Integer</i>,
    "<a href="#channel" title="Channel">Channel</a>" : <i>String</i>,
    "<a href="#showmessagebuttons" title="ShowMessageButtons">ShowMessageButtons</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
<a href="#serviceaccountid" title="ServiceAccountId">ServiceAccountId</a>: <i>Integer</i>
<a href="#channel" title="Channel">Channel</a>: <i>String</i>
<a href="#showmessagebuttons" title="ShowMessageButtons">ShowMessageButtons</a>: <i>Boolean</i>
</pre>

## Properties

#### Enabled

Enable the Slack notifications globally

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ServiceAccountId

You can find your Service Account ID in https://rollbar.com/settings/integrations/#slack

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Channel

The default Slack channel to send the messages

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ShowMessageButtons

Show the Slack actionable buttons

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

