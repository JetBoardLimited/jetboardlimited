mkdir -p ./data

docker cp jbl-forum:/nodebb/config.json ./data
docker cp jbl-forum:/nodebb/public/uploads ./data
docker cp jbl-redis:/data/dump.rdb ./data
