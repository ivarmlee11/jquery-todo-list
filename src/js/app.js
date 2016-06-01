$(document).ready(function() {
  $('#toDoListButton').on('click', function(e) {
    e.preventDefault();
    var temp = $('#textArea').val();
    $('#sortable').append('<li class="listStuff">' + temp + '</li>');
    localStorage.setItem('item_' + temp, temp);
    $('#textArea').val('').focus();
  });

  for (var i in window.localStorage) {
    var val = localStorage.getItem(i);
    $('#sortable').append('<li class="listStuff">' + val + '</li>');
  }

  $('#lsRemoveButton').on('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    $('#sortable').html('');
    $('#textArea').val('').focus();
  });


  $('#sortable').on('click', 'li', function() {
    $(this).fadeOut(5000);
    $('#textArea').focus();
  });

  $('#sortable').sortable();
});
