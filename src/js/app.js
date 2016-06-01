
$(document).ready(function() {


// var localArray =

// $('#sortable').append("<li>"+localStorage.getItem()+"</li>");
// console.log(Objects.keys(localStorage));

// Object.keys(localStorage)

$('#toDoListButton').on('click', function(e){
  e.preventDefault();
  var temp = $('#textArea').val();
  $('#sortable').append("<li>" + temp + "</li>");
  localStorage.setItem('item_'+temp,temp);;
  $('#textArea').val('').focus();
});


$('#lsRemoveButton').on('click', function(e){
  e.preventDefault();
  localStorage.clear();
  $("#sortable").html('');
  $('#textArea').val('').focus();
});


$('#sortable').on('click', 'li', function(){
  $(this).fadeOut(5000);
  $('#textArea').focus();
});

$( "#sortable" ).sortable();

for(var i in window.localStorage){
  val = localStorage.getItem(i);
  value = val.split(',');
$('#sortable').append('<li>'+value+'</li>');
}





});
