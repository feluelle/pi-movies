# pi-movies

A database and api service for movies :movie_camera: hosted on a raspberry pi.

## API Endpoints

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
