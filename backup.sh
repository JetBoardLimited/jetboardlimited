mkdir -p ./data

docker cp jbl-forum:/nodebb/config.json ./data
docker cp jbl-forum:/nodebb/uploads ./data
docker cp jbl-redis:/data/dump.rdb ./data
