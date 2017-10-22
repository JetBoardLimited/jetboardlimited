#!/usr/bin/env ash

export COOKIE_SECRET=$(openssl rand -base64 32)

envsubst < config.template.json > config.json

./nodebb upgrade
./nodebb setup
./nodebb start

exec $@
