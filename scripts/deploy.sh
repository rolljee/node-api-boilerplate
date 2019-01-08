

#!/usr/bin/env bash

url='13.80.28.40'
username='eolementhe'
key='eolementhe.top'

# should match name in ecosystem file
appName="speechmatics-api"

# Add key
eval $(ssh-agent)
ssh-add /etc/ssh/${key}

# Install docker & base pkg
echo "Install base"
echo $pwd
ssh ${username}@${url} 'bash -s' < ./scripts/install_base.sh appName

# Deploy app to server
echo "Deploy app to server"
tar -czvf bundle.tar.gz routes scripts src ecosystem.config.js index.js package.json package-lock.json
scp -r ./bundle.tar.gz ${username}@${url}:/home/${username}/${appName}

# Make app restart on reboot
echo "Launch reboot script"
ssh ${username}@${url} 'bash -s' < ./scripts/startup.sh appName