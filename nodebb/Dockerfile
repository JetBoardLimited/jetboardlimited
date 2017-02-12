FROM node:6.8.0

# Prepare answers to postfix install questions.
RUN echo "postfix postfix/main_mailer_type select smarthost" | debconf-set-selections
RUN echo "postfix postfix/mailname string localhost.localdomain" | debconf-set-selections
RUN echo "postfix postfix/relayhost string smtp.localdomain" | debconf-set-selections

# Install postfix
RUN apt-get update
RUN apt-get install -y postfix

# Create new user
# https://github.com/npm/npm/issues/13306
RUN useradd --user-group --create-home --shell /bin/false nodebb &&\
  cd $(npm root -g)/npm &&\
  npm install fs-extra  &&\
  sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js &&\
  npm install -g npm@4.1.2

# Setup work directory
ENV HOME=/home/nodebb
# Define an entrypoint
RUN chown -R nodebb:nodebb $HOME

# Login as nodebb
# Install dependencies
USER nodebb
WORKDIR $HOME
RUN git clone -b v1.4.3 https://github.com/NodeBB/NodeBB nodebb
COPY entrypoint.sh $HOME/nodebb/
RUN cd nodebb; npm install
WORKDIR $HOME/nodebb

# Expose the default nodebb port
EXPOSE 4567

CMD ["./entrypoint.sh"]