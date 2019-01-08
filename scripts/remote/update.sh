#!/usr/bin/env bash

# Start the app
cd /home/$USER/$1
tar -xzvf bundle.tar.gz
rm -Rf bundle.tar.gz
npm install
pm2 start