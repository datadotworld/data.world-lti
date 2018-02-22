FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Copy application code
COPY src/ ./

COPY package.json ./package.json

# Install app dependencies
RUN npm install

# If you are building your code for production
# RUN npm install --only=production

RUN echo 'NODE_ENV=production' > .env

EXPOSE 3000

CMD [ "node", "/usr/src/app/server" ]