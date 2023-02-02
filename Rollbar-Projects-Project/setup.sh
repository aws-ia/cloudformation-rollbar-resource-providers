#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/PAGER_DUTY_SERVICEKEY/${PAGER_DUTY_SERVICEKEY}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json  | sed "s/PAGER_DUTY_SERVICEKEY/${PAGER_DUTY_SERVICEKEY}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/PAGER_DUTY_SERVICEKEY/${PAGER_DUTY_SERVICEKEY}/g" > test/integ.yml

