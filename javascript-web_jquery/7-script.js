// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Make a GET request to fetch the character data
  $.get("https://swapi-api.alx-tools.com/api/people/5/?format=json", function(data) {
    // Extract the character name from the response data
    var characterName = data.name;
    
    // Set the character name as the text of the div with id character
    $("#character").text(characterName);
  });
});
