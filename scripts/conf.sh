#!/usr/bin/env bash

user='username'
host='host'
key='nameofthekey'

# Add key
# eval $(ssh-agent)
# ssh-add /etc/ssh/${key}

# Launch a script in the remote host
# ssh ${user}@${host} 'bash -s' < ./.myscript.sh

echo "$1"
if [ $1 == "init" ]
then
	./scripts/init.sh  ${user} ${host} ${key}
elif [ $1 == "update" ]
then
	./scripts/update.sh ${user} ${host} ${key}
else
  echo "No script is launched"
fi