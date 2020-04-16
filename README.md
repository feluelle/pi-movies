# pi-movies

A database and api service for movies 🎥 hosted on a dockerized 🐳 raspberry pi.

It uses [mongodb](https://www.mongodb.com/de) as backend with [express](https://expressjs.com/de/) in the front.

## API Endpoints

The following API endpoints are currently available:

* `GET` `/` Hello World :laughing:
* `GET` `/movies` Gets you a list of all movies listed in the database.
* `POST` `/movies` Adds new movies into the database.
  
  Just pass a json in the request body like

  ```json
  {
    "name": "The Movie",
    "length": 120,
    "rating": 5
  }
  ```

## Getting started

To get things up and running first download and install the following:

* [docker](https://www.docker.com/get-started)
* [docker-compose](https://docs.docker.com/compose/install/)

Then you can build and start your containers on a **raspberry pi**, one for mongodb and one for express:

`$ docker-compose -f "docker-compose.prod.yml" up`

## Contributing

If you want to bring things further you can [contribute](CONTRIBUTING.md) to the project.
