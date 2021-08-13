#!/bin/bash

set -e

################################################################################
## Version Script
##
## Customize this script to export and/or increment the version. Export the
## following:
##  - PREVIOUS_VERSION - (Optional) This will aid in docker pre-caching
##  - NEXT_VERSION - (Required) This is the version we're building, it will
##                   serve as the version assets & docker images are tagged as
##
## IMPORTANT!
##   This script is run on all build phases, only increment your version if
##   [ "$IS_BUILDING_FULL" = true ] or you will end up incrementing versions
##   on feature branches, etc...
# add a comment

MAJOR_VERSION=\
$(aws ssm get-parameter \
      --name "$PARAMETER_SCOPE/version/major" \
      | jq -r ".Parameter.Value")
MINOR_VERSION=\
$(aws ssm get-parameter \
      --name "$PARAMETER_SCOPE/version/minor" \
      | jq -r ".Parameter.Value")
CURRENT_VERSION="$MAJOR_VERSION.$MINOR_VERSION"

if [ "$IS_BUILDING_FULL" = true ]; then
  NEXT_MINOR_VERSION=$((MINOR_VERSION+1))
  aws ssm put-parameter \
      --name "$PARAMETER_SCOPE/version/minor" \
      --value $NEXT_MINOR_VERSION \
      --overwrite

  export PREVIOUS_VERSION=$CURRENT_VERSION
  export NEXT_VERSION="$MAJOR_VERSION.$NEXT_MINOR_VERSION"
  if [ "$CODEBUILD_ACCOUNT_ID" != 206013971730 ]; then
    echo RAN
    git tag -a -m $NEXT_VERSION $NEXT_VERSION
    git push origin $NEXT_VERSION
  fi
else
  export PREVIOUS_VERSION=""
  export NEXT_VERSION=$CURRENT_VERSION
fi
echo "CURRENT VERSION: ------------------- $CURRENT_VERSION"
