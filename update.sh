#!/usr/bin/env bash

if [ -z $@ ]; then
  echo "Needs argument ('prod' or dev')."
  exit 1
fi

set -e

echo "Stopping containers..."
docker-compose stop

echo "Saving data..."
TMPDIR="$(mktemp -d)"
docker cp jbl-forum:/nodebb/public/uploads $TMPDIR
docker cp jbl-redis:/data/dump.rdb $TMPDIR
mkdir -p data
tar -czf "./data/backup-$(date +%F_%R).tar.gz" -C $TMPDIR .

echo "Updating source..."
git pull origin

echo "Building containers..."
docker-compose down
docker-compose -f docker-compose.yml -f docker-compose-${@}.yml up -d --build
docker-compose stop

echo "Restoring data..."
docker cp $TMPDIR/dump.rdb jbl-redis:/data
docker cp $TMPDIR/uploads jbl-forum:/nodebb/public
rm -rf $TMPDIR

echo "Starting containers..."
docker-compose start

echo "Finished!"
