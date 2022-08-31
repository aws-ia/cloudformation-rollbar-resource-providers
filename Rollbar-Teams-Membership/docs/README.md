# Rollbar::Teams::Membership

Manage a team membership for a user or project on Rollbar.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Rollbar::Teams::Membership",
    "Properties" : {
        "<a href="#teamid" title="TeamId">TeamId</a>" : <i>Integer</i>,
        "<a href="#memberid" title="MemberId">MemberId</a>" : <i>Integer</i>,
        "<a href="#membertype" title="MemberType">MemberType</a>" : <i>String</i>
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Teams::Membership
Properties:
    <a href="#teamid" title="TeamId">TeamId</a>: <i>Integer</i>
    <a href="#memberid" title="MemberId">MemberId</a>: <i>Integer</i>
    <a href="#membertype" title="MemberType">MemberType</a>: <i>String</i>
</pre>

## Properties

#### TeamId

The team ID for the membership.

_Required_: Yes

_Type_: Integer

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### MemberId

The ID of the user or project to associate to the team.

_Required_: Yes

_Type_: Integer

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### MemberType

The type of membership

_Required_: Yes

_Type_: String

_Allowed Values_: <code>user</code> | <code>project</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

