#!/usr/bin/env bash

user='eolementhe'
hostname='hostname'
key='nameofthekey'

# Add key
# eval $(ssh-agent)
# ssh-add /etc/ssh/${key}

# Launch a script in the remote host
# ssh ${user}@${hostname} 'bash -s' < ./.myscript.sh

echo "$1"
if [ $1 == "init" ]
then
	./scripts/init.sh  ${user} ${hostname} ${key}
elif [ $1 == "update" ]
then
	./scripts/update.sh ${user} ${hostname} ${key}
else
  echo "No script is launched"
fi