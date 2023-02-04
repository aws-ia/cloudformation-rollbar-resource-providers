#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json > inputs/inputs_1_create.json
cat example_inputs/inputs_1_invalid.json  > inputs/inputs_1_invalid.json
cat example_inputs/inputs_1_update.json   > inputs/inputs_1_update.json
cat example_inputs/inputs_2_create.json  > inputs/inputs_2_create.json
cat example_inputs/inputs_2_update.json   > inputs/inputs_2_update.json
cat example_inputs/inputs_3_create.json  > inputs/inputs_3_create.json
cat example_inputs/inputs_3_update.json   > inputs/inputs_3_update.json
cat example_inputs/inputs_4_create.json  > inputs/inputs_4_create.json
cat example_inputs/inputs_4_update.json   > inputs/inputs_4_update.json
cat test/integ-template.yml  > test/integ.yml