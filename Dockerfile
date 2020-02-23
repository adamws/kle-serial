FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install @ijprest/kle-serial --save

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "./kle-converter" ]
