# Rollbar::Notifications::Rule EmailDailySummaryConfig

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#teams" title="Teams">Teams</a>" : <i>[ String, ... ]</i>,
    "<a href="#users" title="Users">Users</a>" : <i>[ String, ... ]</i>,
    "<a href="#summarytime" title="SummaryTime">SummaryTime</a>" : <i>Integer</i>,
    "<a href="#sendonlyifdata" title="SendOnlyIfData">SendOnlyIfData</a>" : <i>Boolean</i>,
    "<a href="#environments" title="Environments">Environments</a>" : <i>[ String, ... ]</i>,
    "<a href="#minitemlevel" title="MinItemLevel">MinItemLevel</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#teams" title="Teams">Teams</a>: <i>
      - String</i>
<a href="#users" title="Users">Users</a>: <i>
      - String</i>
<a href="#summarytime" title="SummaryTime">SummaryTime</a>: <i>Integer</i>
<a href="#sendonlyifdata" title="SendOnlyIfData">SendOnlyIfData</a>: <i>Boolean</i>
<a href="#environments" title="Environments">Environments</a>: <i>
      - String</i>
<a href="#minitemlevel" title="MinItemLevel">MinItemLevel</a>: <i>String</i>
</pre>

## Properties

#### Teams

List of team names to send emails to

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Users

List of usernames or email addresses to send emails to

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SummaryTime

ime of day to send the report, in seconds past midnight UTC

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SendOnlyIfData

Specify whether to send empty reports

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Environments

List of environments to include in the daily summary

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MinItemLevel

Minimum severity level to include

_Required_: No

_Type_: String

_Allowed Values_: <code>debug</code> | <code>info</code> | <code>warning</code> | <code>error</code> | <code>critical</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

