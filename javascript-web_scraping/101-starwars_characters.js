#!/usr/bin/node

/* a script that prints all characters of a Star Wars movie  */

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characterUrls = movie.characters;
    let count = 0;

    characterUrls.forEach((characterUrl) => {
      request.get(characterUrl, (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
          count++;

          if (count === characterUrls.length) {
            // All characters have been printed
            process.exit(0);
          }
        }
      });
    });
  }
});
