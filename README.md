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

#### Integration

Just in case one wants to take a peak inside a running LMS instance.

1. Spin up a test instance of Canvas linked with the LTI running in another container. More info about the lbjay/canvas-docker container can be found over at [DockerHub](https://hub.docker.com/r/lbjay/canvas-docker/).

```sh
docker-compose up --build
```

2. After the containers build and are running, point your browser to [http://localhost:3000](http://localhost:3000) and login.

  - Username: `canvas@example.edu`
  - Password: `canvas-docker`

3. Create a new course in Canvas and the follow the installation instructions in the [FAQ](http://localhost:5000/faq#install-lti-card).

**You might have to navigate out from the application installation area to the main course page for the side bar link to propagate.**


### Configuration Variables

* `DDW_CLIENT_ID` - data.world OAuth Client ID
* `DDW_LTI_CONFIGURATION_HOST` - The LTI configuration URL that will be used in the LTI installation FAQ.
* `DDW_LTI_LAUNCH_HOST` - The publicly accessible hostname for LTI content for use in testing.
* `DDW_LTI_SECURE` - Sets the protocol of dynamically produced URLs from https/http **default** true
* `PORT` - **default** 3000

### EduAppCenter Submission Materials

[EduAppCenter](https://www.eduappcenter.com) allows for the submission of markdown for some of the user facing information.

- [Description](docs/eduappcenter-description.md)
- [Installation Instructions](docs/educappcenter-installation.md)
- [Testing Instructions](docs/educappcenter-testing.md)

### Contributing

This integration has been released as an open-source project. Community participation is encouraged and highly
appreciated. If you'd like to contribute, please follow the [Contributing Guidelines](CONTRIBUTING.md).

### Support

For support, either create a [new issue](https://github.com/datadotworld/data.world-lti/issues) here on
GitHub, or send an email to help@data.world.
