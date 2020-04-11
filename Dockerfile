FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY .npmrc ./
COPY patches/* ./patches/
COPY package*.json ./

RUN npm install typescript patch-package --save-dev
RUN npm install

# Bundle app source
COPY kle-converter.js kle-converter.js

EXPOSE 3000
CMD [ "node", "kle-converter.js" ]
