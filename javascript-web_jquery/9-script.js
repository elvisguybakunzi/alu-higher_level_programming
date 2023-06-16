// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Make a GET request to fetch the translation data
  $.get("https://fourtonfish.com/hellosalut/?lang=fr", function(data) {
    // Extract the hello translation from the response data
    var helloTranslation = data.hello;
    
    // Set the hello translation as the text of the div with id hello
    $("#hello").text(helloTranslation);
  });
});
