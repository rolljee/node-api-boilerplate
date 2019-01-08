#!/usr/bin/env bash

# Is docker already installed?
set +e
hasDocker=$(docker version | grep "version")
set -e

if [ ! "$hasDocker" ]; then
	echo "Installing docker"
	# Remove the lock
	set +e
	sudo rm /var/lib/dpkg/lock > /dev/null
	sudo rm /var/cache/apt/archives/lock > /dev/null
	sudo dpkg --configure -a
	set -e

	# Required to update system
	sudo apt-get update
	sudo apt-get -y install wget lxc iptables curl

	# Install docker
	wget -qO- https://get.docker.com/ | sudo sh
	sudo usermod -a -G docker $USER
	sudo service docker start || sudo service docker restart
	echo "docker installed on remote host"
fi

# Install base pkg
echo "Installing base packages"
sudo apt-get install -y nodejs npm

echo "Create output folder"
mkdir -p /home/eolementhe/$1
sudo chown -R $USER:$USER /usr/local/lib
sudo chown -R $USER:$USER /usr/local/bin

# Install pm2 on machine
echo "Installing pm2"
npm install -g pm2
mkdir -p /home/eolementhe/.pm2/
sudo chown -R $USER:$USER /home/eolementhe/.pm2/

# Log to docker and pull the image.
echo "Pulling speechmatics docker"
docker login --username=videomenthe --password=AKCp5btyfoWgqqeSrjSQ1FSFDkKWDo8oSi3VjurzK2oYW5PCr9dg37J8u2G4xYPYSeGGb5JgE https://speechmatics-docker-prod-videomenthe.jfrog.io
docker pull speechmatics-docker-prod-videomenthe.jfrog.io/transcriber-en:6.0.2