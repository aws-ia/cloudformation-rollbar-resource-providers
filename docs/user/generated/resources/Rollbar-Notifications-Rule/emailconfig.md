# Rollbar::Notifications::Rule EmailConfig

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#teams" title="Teams">Teams</a>" : <i>[ String, ... ]</i>,
    "<a href="#users" title="Users">Users</a>" : <i>[ String, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#teams" title="Teams">Teams</a>: <i>
      - String</i>
<a href="#users" title="Users">Users</a>: <i>
      - String</i>
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

