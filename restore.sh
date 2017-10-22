#!/usr/bin/env bash

if [ -z $@ ]; then
  echo "Needs argument ('prod' or dev')."
  exit 1
fi

TMPDIR="$(mktemp -d)"
tar -xzf $@ -C $TMPDIR

echo "Restoring data..."
docker-compose stop
docker cp $TMPDIR/dump.rdb jbl-redis:/data
docker cp $TMPDIR/uploads jbl-forum:/nodebb/public
docker-compose start

rm -rf $TMPDIR

echo "Finished!"
