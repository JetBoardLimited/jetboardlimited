mkdir -p ./data

docker cp ./data/config.json jbl-forum:/nodebb
docker cp ./data/uploads jbl-forum:/nodebb
docker cp ./data/dump.rdb jbl-redis:/data
