# Rollbar::Projects::AccessToken

Manage an access token for a Rollbar project.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Rollbar::Projects::AccessToken",
    "Properties" : {
        "<a href="#projectid" title="ProjectId">ProjectId</a>" : <i>Integer</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#scopes" title="Scopes">Scopes</a>" : <i>[ String, ... ]</i>,
        "<a href="#ratelimitwindowsize" title="RateLimitWindowSize">RateLimitWindowSize</a>" : <i>Integer</i>,
        "<a href="#ratelimitwindowcount" title="RateLimitWindowCount">RateLimitWindowCount</a>" : <i>Integer</i>,
    }
}
</pre>

### YAML

<pre>
Type: Rollbar::Projects::AccessToken
Properties:
    <a href="#projectid" title="ProjectId">ProjectId</a>: <i>Integer</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#scopes" title="Scopes">Scopes</a>: <i>
      - String</i>
    <a href="#ratelimitwindowsize" title="RateLimitWindowSize">RateLimitWindowSize</a>: <i>Integer</i>
    <a href="#ratelimitwindowcount" title="RateLimitWindowCount">RateLimitWindowCount</a>: <i>Integer</i>
</pre>

## Properties

#### ProjectId

The project ID

_Required_: Yes

_Type_: Integer

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Name

Name to identify the access token

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Scopes

Scopes to assign to the create access token

_Required_: Yes

_Type_: List of String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### RateLimitWindowSize

Period of time (in seconds) for the rate limit configuration

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RateLimitWindowCount

Number of requests for the defined rate limiting period

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the AccessToken.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### AccessToken

The project access token

#### Status

Whether or not this access token is enabled

