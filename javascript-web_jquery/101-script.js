// Use the jQuery shorthand for the document.ready() function
$(function() {
  // Add item to the list
  $("#add_item").click(function() {
    // Create a new <li> element with the text "Item"
    var newItem = $("<li>").text("Item");
    
    // Append the new <li> element to the list with class "my_list"
    $("ul.my_list").append(newItem);
  });
  
  // Remove item from the list
  $("#remove_item").click(function() {
    // Select the last <li> element in the list with class "my_list"
    var lastItem = $("ul.my_list li").last();
    
    // Remove the last <li> element from the list
    lastItem.remove();
  });
  
  // Clear the list
  $("#clear_list").click(function() {
    // Remove all <li> elements from the list with class "my_list"
    $("ul.my_list").empty();
  });
});
