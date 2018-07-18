FROM node:9-alpine

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install

COPY ./ .

ENV DDW_LTI_CONFIGURATION_URL http://localhost:3000/lti/config
ENV PORT 3000

CMD [ "npm", "run", "deploy" ]
