FROM node:6.8.0

RUN git clone -b v1.4.6 https://github.com/NodeBB/NodeBB nodebb
WORKDIR /nodebb
RUN npm install && npm cache clean