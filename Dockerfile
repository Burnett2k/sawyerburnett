# Set the base image to Node 8.7
FROM node:8.9.4

# File Author / Maintainer
MAINTAINER Sawyer Blue Burnett

# Copy files needed for Node app to install / run
COPY package.json ./
COPY .babelrc ./
COPY static.config.js ./
COPY src/ ./src
COPY public/ ./public

# Install NPM packages ( using yarn )
RUN yarn install
RUN yarn install -g react-static
RUN yarn build

EXPOSE 80