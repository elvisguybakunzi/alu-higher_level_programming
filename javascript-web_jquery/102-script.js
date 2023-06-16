// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Fetch and display translation when the button is clicked
  $("#btn_translate").click(function() {
    // Get the language code entered by the user
    var languageCode = $("#language_code").val();
    
    // Make the GET request to the API service
    $.get("https://www.fourtonfish.com/hellosalut/hello/", { lang: languageCode }, function(data) {
      // Update the text of the hello div with the translation
      $("#hello").text(data.hello);
    });
  });
});
