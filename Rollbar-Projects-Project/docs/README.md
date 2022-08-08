# Rollbar::Projects::Project

Manage a project on Rollbar.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Rollbar::Projects::Project",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Projects::Project
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
</pre>

## Properties

#### Name

Name of the project. Must start with a letter; can contain letters, numbers, spaces, underscores, hyphens, periods, and commas. Max length 32 characters.

_Required_: Yes

_Type_: String

_Pattern_: <code>^[\w\_\-\.\,]{1,32}$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The project ID.

#### AccountId

The account ID where the project belongs to.

#### Status

Whether or not this project is enabled.

