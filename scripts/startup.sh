#!/usr/bin/env bash

# This should work for ubuntu/debian
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER

# Start the app
cd /home/$USER/$1
tar -xzvf bundle.tar.gz
rm -Rf bundle.tar.gz
npm install
pm2 start

# Save the config
pm2 save