FROM node:9-alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE $PORT

CMD [ "npm", "run", "start" ]
