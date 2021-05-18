const express = require ('express');
const {get, socket} = express.router;
const {render} = express.reply;

// Send new message
const sendMessage = ctx =>
{
  ctx.io.emit('message', ctx.data);
};

express([
get('/', ctx => render('views/chat.pug')),

//join or leave chat
socket('connect', updateCounter),
socket('disconnect', updateCounter),
socket('message', sendMessage)
]);