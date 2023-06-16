// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Add a click event listener to the div with id red_header
  $("#red_header").click(function() {
    // Select the <header> element and update the text color to red
    $("header").css("color", "#FF0000");
  });
});
