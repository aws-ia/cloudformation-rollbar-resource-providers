# Rollbar::Notifications::Rule RateFilter

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#period" title="Period">Period</a>" : <i>Double</i>,
    "<a href="#count" title="Count">Count</a>" : <i>Double</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#period" title="Period">Period</a>: <i>Double</i>
<a href="#count" title="Count">Count</a>: <i>Double</i>
</pre>

## Properties

#### Type

Rate of occurrences of an item

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Period

Number of seconds

_Required_: Yes

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Count

_Required_: Yes

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

