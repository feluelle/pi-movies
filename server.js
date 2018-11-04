'use strict';

const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const PORT = 8080;
const HOST = '0.0.0.0';
var moviedb = undefined;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/movies', (req, res) => {
  moviedb.collection('movies').find().toArray(function(err, results) {
    if (err) return console.log(err)
    res.send(results)
  })
});

app.post('/movies', (req, res) => {
  moviedb.collection('movies').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log(`Saved ${req.body} to database!`)
    res.redirect('/movies')
  })
})

mongodb.MongoClient.connect('mongodb://moviedb:27017/moviedb', { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  moviedb = client.db('moviedb')
  app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  })
})
