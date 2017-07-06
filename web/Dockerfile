FROM node:6.9-alpine

WORKDIR /node
COPY package.json ./
RUN npm install && npm cache clean
COPY . .
RUN npm run build 
