$(document).ready(function() {

  //clicking on the add to list button stores the text
  //value in a variable and appends it to the sortable list
  //local storage is also updated with the setItem() method
  //focus is returned to the text box
  $('#toDoListButton').on('click', function(e) {
    e.preventDefault();
    var temp = $('#textArea').val();
    $('#sortable').append('<li class="listStuff">' + temp + '</li>');
    localStorage.setItem('item_' + temp, temp);
    $('#textArea').val('').focus();
  });

  //this runs on page load and gets local storage items by
  //index number and adds them to the sortable list
  for (var i in window.localStorage) {
    var val = localStorage.getItem(i);
    $('#sortable').append('<li class="listStuff">' + val + '</li>');
  }


  //list items are removed with this button click
  //local storage is cleared as well
  $('#lsRemoveButton').on('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    $('#sortable').html('');
    $('#textArea').val('').focus();
  });

  //event delegation, dynamically created list items
  //fade out on click
  //focus is returned to the text box
  $('#sortable').on('click', 'li', function() {
    $(this).fadeOut(5000);
    $('#textArea').focus();
  });


  //this sortable method came with the jQuery plugin
  $('#sortable').sortable();
});
