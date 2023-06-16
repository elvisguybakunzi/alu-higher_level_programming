#!/usr/bin/node

/* a script that prints all characters of a Star Wars movie  */

const request = require('request');

function getDataFrom(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (err, _res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

function printMovieCharacters(movieId) {
  const movieUri = `https://swapi.dev/api/films/${movieId}/`;

  getDataFrom(movieUri)
    .then(JSON.parse)
    .then(function (res) {
      const characters = res.characters;
      const promises = [];

      for (let i = 0; i < characters.length; ++i) {
        promises.push(getDataFrom(characters[i]));
      }

      Promise.all(promises)
        .then((results) => {
          for (let i = 0; i < results.length; ++i) {
            const character = JSON.parse(results[i]);
            console.log(character.name);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

printMovieCharacters(process.argv[2]);
