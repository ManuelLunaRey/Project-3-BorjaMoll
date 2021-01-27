FROM node:10

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 8080

CMD ["npm", "run", "server"]
