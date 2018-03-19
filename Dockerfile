FROM node:carbon-slim

# Create app directory
WORKDIR /git/matches-ms

# Install app dependencies
COPY package.json /git/matches-ms/
RUN npm install

# Bundle app source
COPY . /git/matches-ms/

CMD [ "npm", "start"]
