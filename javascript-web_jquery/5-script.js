// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Add a click event listener to the div with id add_item
  $("#add_item").click(function() {
    // Create a new li element
    var newItem = $("<li>Item</li>");
    
    // Append the new item to the list with class my_list
    $(".my_list").append(newItem);
  });
});
