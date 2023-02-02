#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_invalid.json | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_1_invalid.json
cat example_inputs/inputs_1_update.json  | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_1_update.json
cat example_inputs/inputs_2_create.json | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_2_create.json
cat example_inputs/inputs_2_update.json  | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_2_update.json
cat example_inputs/inputs_3_create.json | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_3_create.json
cat example_inputs/inputs_3_update.json  | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_3_update.json
cat example_inputs/inputs_4_create.json | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_4_create.json
cat example_inputs/inputs_4_update.json  | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > inputs/inputs_4_update.json
cat test/integ-template.yml | sed "s/ROLLBAR_PROJECT_TOKEN_INPUT/${ROLLBAR_PROJECT_TOKEN}/g" > test/integ.yml

