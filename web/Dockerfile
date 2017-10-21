FROM node:6-alpine

WORKDIR /node
COPY package.json .
RUN yarn install --pure-lockfile --non-interactive && yarn cache clean
COPY . .
RUN npm run build
