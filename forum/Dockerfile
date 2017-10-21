FROM node:6-alpine

RUN apk add --no-cache make gcc g++ python openssl git gettext
RUN git clone -b v1.6.1 https://github.com/NodeBB/NodeBB nodebb

WORKDIR /nodebb
RUN yarn install --pure-lockfile --non-interactive && yarn cache clean

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
ENTRYPOINT ["docker-entrypoint"]

COPY config.template.json .
RUN envsubst < config.template.json > config.json

CMD ["./nodebb", "log"]
