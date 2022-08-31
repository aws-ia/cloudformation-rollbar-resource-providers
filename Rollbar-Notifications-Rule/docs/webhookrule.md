# Rollbar::Notifications::Rule WebhookRule

Create Webhook notification rules

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#trigger" title="Trigger">Trigger</a>" : <i>String</i>,
    "<a href="#filters" title="Filters">Filters</a>" : <i>[ <a href="environmentfilter.md">EnvironmentFilter</a>, <a href="levelfilter.md">LevelFilter</a>, <a href="titlefilter.md">TitleFilter</a>, <a href="filenamefilter.md">FilenameFilter</a>, <a href="contextfilter.md">ContextFilter</a>, <a href="methodfilter.md">MethodFilter</a>, <a href="frameworkfilter.md">FrameworkFilter</a>, <a href="pathfilter.md">PathFilter</a>, <a href="pathwithexistsfilter.md">PathWithExistsFilter</a>, <a href="uniqueoccurrencesfilter.md">UniqueOccurrencesFilter</a>, <a href="ratefilter.md">RateFilter</a>, ... ]</i>,
    "<a href="#action" title="Action">Action</a>" : <i>String</i>,
    "<a href="#config" title="Config">Config</a>" : <i><a href="webhookconfig.md">WebhookConfig</a></i>
}
</pre>

### YAML

<pre>
<a href="#trigger" title="Trigger">Trigger</a>: <i>String</i>
<a href="#filters" title="Filters">Filters</a>: <i>
      - <a href="environmentfilter.md">EnvironmentFilter</a>, <a href="levelfilter.md">LevelFilter</a>, <a href="titlefilter.md">TitleFilter</a>, <a href="filenamefilter.md">FilenameFilter</a>, <a href="contextfilter.md">ContextFilter</a>, <a href="methodfilter.md">MethodFilter</a>, <a href="frameworkfilter.md">FrameworkFilter</a>, <a href="pathfilter.md">PathFilter</a>, <a href="pathwithexistsfilter.md">PathWithExistsFilter</a>, <a href="uniqueoccurrencesfilter.md">UniqueOccurrencesFilter</a>, <a href="ratefilter.md">RateFilter</a></i>
<a href="#action" title="Action">Action</a>: <i>String</i>
<a href="#config" title="Config">Config</a>: <i><a href="webhookconfig.md">WebhookConfig</a></i>
</pre>

## Properties

#### Trigger

An error/ message is seen for the first time.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>new_item</code> | <code>occurrence</code> | <code>deploy</code> | <code>reactivated_item</code> | <code>resolved_item</code> | <code>exp_repeat_item</code> | <code>reopened_item</code> | <code>occurrence_rate</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Filters

To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.

_Required_: No

_Type_: List of <a href="environmentfilter.md">EnvironmentFilter</a>, <a href="levelfilter.md">LevelFilter</a>, <a href="titlefilter.md">TitleFilter</a>, <a href="filenamefilter.md">FilenameFilter</a>, <a href="contextfilter.md">ContextFilter</a>, <a href="methodfilter.md">MethodFilter</a>, <a href="frameworkfilter.md">FrameworkFilter</a>, <a href="pathfilter.md">PathFilter</a>, <a href="pathwithexistsfilter.md">PathWithExistsFilter</a>, <a href="uniqueoccurrencesfilter.md">UniqueOccurrencesFilter</a>, <a href="ratefilter.md">RateFilter</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Action

The action associated with this rule

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Config

_Required_: No

_Type_: <a href="webhookconfig.md">WebhookConfig</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

