var socket = io();
const users = require('../../db').users;

// number of users

socket.on('num', function(data)){$('.users-num').html(data);});
// receive message
socket.on('message', function (data) {
  $('.chat').append('<p><strong>' + data.user + '</strong>: ' + data.message + '</p>');
});

$('form').submit(function (e) {

  e.preventDefault();

  //message from the user
var message = $(e.target).find('input').val();

  // Send the message to the server
  socket.emit('message', {
    user: users || 'Anonymous',
    message: message
  });

  //new message
  e.target.reset();
  $(e.target).find('input').focus();
});

