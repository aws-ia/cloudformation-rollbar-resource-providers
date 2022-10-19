# Rollbar::Teams::Team

Manage a team on Rollbar.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Rollbar::Teams::Team",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#accesslevel" title="AccessLevel">AccessLevel</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Teams::Team
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#accesslevel" title="AccessLevel">AccessLevel</a>: <i>String</i>
</pre>

## Properties

#### Name

Name of the team. Max length 32 characters.

_Required_: Yes

_Type_: String

_Pattern_: <code>^[a-zA-Z0-9\-\_ ]{1,32}$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AccessLevel

Can be standard, light, or view.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>standard</code> | <code>light</code> | <code>view</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The team ID.

#### AccountId

The account ID where the team belongs to.

