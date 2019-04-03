# Set the base image to Node 8.7
FROM node:8-alpine

# File Author / Maintainer
MAINTAINER Sawyer Blue Burnett

# Copy files needed for Node app to install / run
COPY package.json ./
COPY .babelrc ./
COPY static.config.js ./
COPY yarn.lock ./

COPY src/ ./src
COPY public/ ./public

# Install NPM packages ( using yarn )
# RUN yarn global add react-static@6.3.8
RUN npm install
RUN npm run build

EXPOSE 80