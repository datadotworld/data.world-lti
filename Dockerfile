FROM node:latest

ENV DATABASE_DIALECT=postgres
ENV DATABASE_HOST=localhost
ENV DATABASE_PORT=5432
ENV DATABASE_NAME=postgres
ENV DATABASE_USERNAME=postgres
ENV DATABASE_PASSWORD=something-secret

ENV DDW_CLIENT_ID=undefined
ENV DDW_CLIENT_SECRET=something-secret
ENV DDW_OAUTH_REDIRECT_URI=localhost
ENV DDW_OAUTH_RESPONSE_TYPE=code

ENV NODE_ENV=production
ENV NODE_PORT=4000

ENV REDIS_HOST=localhost
ENV REDIS_PORT=6379

ENV TINI_VERSION v0.17.0

ENV WEBPACK_MODE=production

ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

RUN npm install webpack -g

WORKDIR /tmp

COPY package.json /tmp/

RUN npm config set registry http://registry.npmjs.org/ && NODE_ENV=development npm install

WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

RUN npm run build:docker

ENTRYPOINT ["/tini", "--"]
CMD [ "npm", "run", "start:production" ]
EXPOSE 4000
