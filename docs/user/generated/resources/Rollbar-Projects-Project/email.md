# Rollbar::Projects::Project Email

Configuring Email notifications integration.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
    "<a href="#includerequestparams" title="IncludeRequestParams">IncludeRequestParams</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
<a href="#includerequestparams" title="IncludeRequestParams">IncludeRequestParams</a>: <i>Boolean</i>
</pre>

## Properties

#### Enabled

Enable the Email notifications globally

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IncludeRequestParams

Whether to include request parameters

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

