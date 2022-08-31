# cloudformation-rollbar

## Set up local type configuration

When running contract or SAM tests locally, the resources expect the Rollbar token to be available via the type configuration.
Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing
```bash
cat << EOF >> ~/.cfn-cli/typeConfiguration.json
{
  "RollbarAccess": {
    "Token": "[rollbarAccessToken]"
  }
}
EOF
```

## Set up git filter

This project uses a filter set up in the [.gitattributes](.gitattributes) file to replace private values for testing within the different `overrides.json` on each resource.

The filter has to be added manually inside the `.git/config` file once the repository has been cloned.

Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing

```bash
cat << EOF >> .git/config
[filter "rollbar"]
clean = sed \
        -e 's:[existingRollbarProjectId]:<ROLLBAR_PROJECT_ID>:g' \
        -e 's:[existingRollbarProjectToken]:<ROLLBAR_PROJECT_TOKEN>:g'
smudge = sed \
        -e 's:<ROLLBAR_PROJECT_ID>:[existingRollbarProjectId]:g' \
        -e 's:<ROLLBAR_PROJECT_TOKEN>:[existingRollbarProjectToken]:g'
EOF
```