// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Make a GET request to fetch the movies data
  $.get("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
    // Extract the movie results from the response data
    var movies = data.results;
    
    // Iterate over each movie and append its title to the list
    $.each(movies, function(index, movie) {
      // Create a new li element with the movie title
      var li = $("<li>").text(movie.title);
      
      // Append the li element to the ul with id list_movies
      $("#list_movies").append(li);
    });
  });
});
