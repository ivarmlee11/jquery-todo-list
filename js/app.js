
$(document).ready(function() {

//the value of the text box is appanded to the list
//in a concat'd html string
//item is also sent to local storage with the .setItem method
//takes two params, object key name and value name

$('#toDoListButton').on('click', function(e){
  e.preventDefault();
  var temp = $('#textArea').val();
  $('#sortable').append("<li class='listStuff'>" + temp + "</li>");
  localStorage.setItem('item_'+temp,temp);;
  $('#textArea').val('').focus();
});


// for in loop grabs properties in the localStorage Object
// .getItem(property) returns a string which is the corresping key
for(var i in window.localStorage){
  console.log(localStorage)
  console.log(val);
$('#sortable').append('<li class="listStuff">'+val+'</li>');
};


//this button calls the .clear method on local storage
//and fills the unordered list element with a blank html string "" to clear it
//mouse cursor goes back to the text input
$('#lsRemoveButton').on('click', function(e){
  e.preventDefault();
  localStorage.clear();
  $("#sortable").html('');
  $('#textArea').val('').focus();
});


// this is the list with the UI plugin
// this is event delegtion, events are delegated
// to newly made list items
// when they get clicked they'll fade out over 5 seconds
// focus (mouse cursor) goes back to the text input
$('#sortable').on('click', 'li', function(){
  $(this).fadeOut(5000);
  $('#textArea').focus();
});

// this is the UI plugin function .sortable
$( "#sortable" ).sortable();

});
