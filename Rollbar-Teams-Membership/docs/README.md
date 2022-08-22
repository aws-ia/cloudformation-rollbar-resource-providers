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
        "<a href="#member" title="Member">Member</a>" : <i><a href="member.md">Member</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Teams::Membership
Properties:
    <a href="#teamid" title="TeamId">TeamId</a>: <i>Integer</i>
    <a href="#member" title="Member">Member</a>: <i><a href="member.md">Member</a></i>
</pre>

## Properties

#### TeamId

The team ID for the membership.

_Required_: Yes

_Type_: Integer

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Member

_Required_: Yes

_Type_: <a href="member.md">Member</a>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

