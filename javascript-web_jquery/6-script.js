// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Add a click event listener to the div with id update_header
  $("#update_header").click(function() {
    // Update the text of the header element
    $("header").text("New Header!!!");
  });
});
