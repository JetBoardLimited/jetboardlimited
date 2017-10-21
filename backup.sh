mkdir -p ./data

docker cp jbl-forum:/nodebb ./data
docker cp jbl-redis:/data/dump.rdb ./data
