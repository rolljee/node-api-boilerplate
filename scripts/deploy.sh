

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
ssh ${username}@${url} 'bash -s' < ./install_base.sh

# Deploy app to server
pm2 deploy ecosystem.config.js production setup

# Make app restart on reboot
ssh ${username}@${url} 'bash -s' < ./startup.sh appName