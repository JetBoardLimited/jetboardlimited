FROM node:6.8.0

# Create new user
# https://github.com/npm/npm/issues/13306
RUN useradd --user-group --create-home --shell /bin/false app &&\
  cd $(npm root -g)/npm &&\
  npm install fs-extra  &&\
  sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js &&\
  npm install -g npm@3.10.9

# Setup work directory
ENV HOME=/home/app
COPY package.json npm-shrinkwrap.json $HOME/web/
RUN chown -R app:app $HOME/*

# Login as app
# Install dependencies
USER app
WORKDIR $HOME/web
RUN npm install && npm cache clean

# Copy source files
USER root
COPY . $HOME/web/
