#!/usr/bin/env bash

url='13.80.28.40'
username='eolementhe'
key='eolementhe.top'

# should match name in ecosystem file
appName="speechmatics-api"

set +e
rm -f bundle.tar.gz
set -e

echo "Deploy app to server"
tar -czvf bundle.tar.gz routes scripts src ecosystem.config.js index.js package.json package-lock.json
scp -r ./bundle.tar.gz ${username}@${url}:/home/${username}/${appName}

ssh ${username}@${url} 'bash -s' < ./scripts/remote/update.sh ${appName}