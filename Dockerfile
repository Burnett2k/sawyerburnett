# Set the base image to Node 8.7
FROM node:8-alpine

# File Author / Maintainer
MAINTAINER Sawyer Blue Burnett

# Copy files needed for Node app to install / run
COPY package.json ./
COPY .babelrc ./
# COPY static.config.js ./

# Due to memory constraints occurring during the build, I've temporarily opted to 
# Simply commit the dist folder and serve it up. Now, I just need to remember to commit
# it every time I push. This is not ideal, but I'm really tired of messing with it
COPY dist/ ./dist



RUN npm install serve

# COPY src/ ./src
# COPY public/ ./public

# Install NPM packages ( using yarn )
# RUN npm run build --debug