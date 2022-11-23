# Rollbar::Teams::Membership

This resource type manages a [membership between a Rollbar team and project][10]

[Documentation][22]

## Prerequisites
* [AWS Account][3]
* [AWS CLI][4]
* [Rollbar account][20] and [Account Access Token][21]

To get started:

1. Sign in to the [AWS Management Console][5] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Rollbar" prefix.

Note: All official Rollbar resources begin with `Rollbar::` and specify that they are `Published by Rollbar`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
- Extension name
- Execution role ARN
- Automatic updates for minor version releases
- Configuration

6. In your terminal, specify the configuration data for the registered Rollbar CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:

For example:

  ```Bash
  $ aws cloudformation set-type-configuration \
  --region us-west-2 --type RESOURCE \
  --type-name Rollbar::Teams::Membership \
  --configuration-alias default \
  --configuration "{ \"RollbarAccess\":{\"Token\":\"YOURACCOUNTTOKEN\"}}"
  ```

Note: All Rollbar resources requires a type configuration to be set, except `Rollbar::Notifications::Rule`.

7. After you have your resource configured, [create your AWS stack][6] that includes any of the activated Rollbar resources.

For more information about available commands and workflows, see the official [AWS documentation][7].

## Supported regions

The Rollbar CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples

### Shows how to create a Rollbar team and assign it to a project.
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Rollbar team and assign it to a project.
Resources:
  MySampleTeam:
    Type: Rollbar::Teams::Team
    Properties:
      Name: Sample Team
      AccessLevel: standard
  MySampleTeamMembership:
    Type: Rollbar::Teams::Membership
    Properties:
      TeamId: !GetAtt MySampleTeam.Id
      MemberId: 123456
      MemberType: project
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://aws.amazon.com/account/
[4]: https://aws.amazon.com/cli/
[5]: https://aws.amazon.com/console/
[6]: https://console.aws.amazon.com/cloudformation/home
[7]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html

[10]: https://docs.rollbar.com/docs/notifications
[11]: ./Rollbar-Notifications-Rule/
[12]: https://docs.rollbar.com/docs/project-configurations#project-access-tokens
[13]: ./Rollbar-Projects-AccessToken/
[14]: https://docs.rollbar.com/docs/projects
[15]: ./Rollbar-Projects-Project/
[16]: https://docs.rollbar.com/docs/users-teams-accounts#team-access-levels
[17]: ./Rollbar-Teams-Membership/
[18]: https://docs.rollbar.com/docs/users-teams-accounts#teams
[19]: ./Rollbar-Teams-Team
[20]: https://rollbar.com/
[21]: https://docs.rollbar.com/reference/getting-started-1#account-access-tokens
[22]: ./docs/README.md