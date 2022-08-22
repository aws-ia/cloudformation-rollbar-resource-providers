# Rollbar::Teams::Membership Member

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#userid" title="UserId">UserId</a>" : <i>Integer</i>,
    "<a href="#projectid" title="ProjectId">ProjectId</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#userid" title="UserId">UserId</a>: <i>Integer</i>
<a href="#projectid" title="ProjectId">ProjectId</a>: <i>Integer</i>
</pre>

## Properties

#### UserId

The ID of the user to associate to the team. You must specify only one ID.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ProjectId

The ID of the project to associate to the team. You must specify only one ID.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

