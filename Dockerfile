FROM node:9-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install

COPY ./ .

ENV PORT 3000

CMD [ "npm", "run", "start" ]
