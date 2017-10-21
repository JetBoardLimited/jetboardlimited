mkdir -p ./data

docker cp ./data/nodebb jbl-forum:/
docker cp ./data/dump.rdb jbl-redis:/data
