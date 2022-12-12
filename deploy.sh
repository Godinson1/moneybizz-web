#!/usr/bin/env bash
set -e

# Build application
build(){
 if [ "$GITHUB_REF" == "refs/heads/staging" ]; then
       export REACT_APP_API_URL=$REACT_APP_API_URL
  else
       export REACT_APP_API_URL=$REACT_APP_API_URL
  fi
  yarn build
}

# Deploy application
deploy_s3(){
 if [ "$GITHUB_REF" == "refs/heads/staging" ]; then
       export S3_BUCKET="s3://moneybizz.com"   
  else
       export S3_BUCKET="s3://moneybizz.com"   
  fi
  aws s3 sync . $S3_BUCKET --acl public-read
}

# Invalidate Cache
invalidateCache() {
 if [ "$GITHUB_REF" == "refs/heads/staging" ]; then
       export DISTRIBUTION_ID=$DISTRIBUTION_ID
       
  else
       export DISTRIBUTION_ID=$DISTRIBUTION_ID
    
  fi
  aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths /*
}


main() {
  build
  clearCache
  deploy_s3
}
$@
