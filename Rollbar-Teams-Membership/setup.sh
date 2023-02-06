#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/ROLLBAR_TEAMSMEMBERSHIP_TEAM_ID/${ROLLBAR_TEAMSMEMBERSHIP_TEAM_ID}/g" | sed "s/ROLLBAR_TEAMSMEMBERSHIP_MEMBER_ID/${ROLLBAR_TEAMSMEMBERSHIP_MEMBER_ID}/g" > inputs/inputs_1_create.json
cat test/integ-template.yml | sed "s/ROLLBAR_TEAMSMEMBERSHIP_MEMBER_ID/${ROLLBAR_TEAMSMEMBERSHIP_MEMBER_ID}/g" > test/integ.yml