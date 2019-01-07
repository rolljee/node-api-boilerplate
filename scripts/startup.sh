#!/usr/bin/env bash

# This should work for ubuntu/debian
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER

# Save the config
cd /home/$USER/source
pm2 start
pm2 save