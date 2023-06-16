// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Add a click event listener to the div with id toggle_header
  $("#toggle_header").click(function() {
    // Toggle the class of the header element
    $("header").toggleClass("red green");
  });
});
