FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY .npmrc ./
COPY patches/* ./patches/
COPY package*.json ./

RUN npm install patch-package --save-dev
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "./kle-converter" ]
