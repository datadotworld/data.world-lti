# data.world LTI Connector

LTI compliant LMS connector for data.world

## Getting Started

### Quick Start

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/datadotworld/data.world-lti)

### Installation and Build

```sh
npm install
npm run build
npm run start
```

### Testing

#### Unit

Unit tests can be run with the following command:

```sh
npm run test
```

#### Integration (Programmatic)

*TODO: Write integration tests with API calls to an LMS instance running in the lbjay/canvas-docker container.*

#### Integration (Manual)

Just in case one wants to take a peak inside a running LMS instance.

##### Canvas Docker

1. Spin up a test instance of Canvas. More info about the lbjay/canvas-docker container can be found over at [DockerHub](https://hub.docker.com/r/lbjay/canvas-docker/).

```sh
docker pull lbjay/canvas-docker

docker run --name canvas-docker -p 3000:3000 -d lbjay/canvas-docker
```

2. After the container builds and is running, point your browser to [http://localhost:3000](http://localhost:3000).

  - Username: `canvas@example.edu`
  - Password: `canvas-docker`


### Configuration Variables

* `DDW_CLIENT_ID` - data.world OAuth Client ID
* `DDW_LTI_CONFIGURATION_URL` - The LTI configuration URL that will be used in the LTI installation FAQ.
* `NODE_ENV` - **default** production
* `PORT` - **default** 3000

### Contributing

This integration has been released as an open-source project. Community participation is encouraged and highly
appreciated. If you'd like to contribute, please follow the [Contributing Guidelines](CONTRIBUTING.md).

### Support

For support, either create a [new issue](https://github.com/datadotworld/data.world-lti/issues) here on
GitHub, or send an email to help@data.world.
