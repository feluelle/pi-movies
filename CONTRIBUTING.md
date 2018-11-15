# Contributing to pi-movies

You can contribute to the project by:

* Reporting Issues
* Fixing Bugs
* Implementing Features
* Improving Documentation

## Setting up a development environment

To be able to fix bugs or implement new features you need to setup a development environment first.

1. First make sure you already did the [Getting Started](README.md#Getting-Started)         section.

1. Then you also need to install [nodejs](https://nodejs.org/en/download/) to be able to    write code and tests probably.

1. Nodejs also contains [npm](https://www.npmjs.com/) a package manager to install          external modules. Just type `npm install` in your terminal to install all external       modules/dependencies for this project.

Now you are good to go.
To run your containers on a machine other than a raspberry pi you can build and run the containers by calling the default development version of the docker-compose file.

`$ docker-compose up`

To run tests just type:

`$ npm test`