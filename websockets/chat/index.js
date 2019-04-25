const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

/* What this code is doing is attaching listeners to any event we want to on any incoming socket that successfully connected. 
In other words, if a socket connection is established, these are the events we want to listen for.

In our case the events we have are user_join which sets the username on the socket for later use and then broadcast back that 
data to alert others that somebody has joined,  chat_message which attaches the username and then broadcasts to everybody else 
that a new message was sent, and disconnect which also broadcasts to everybody else that somebody has left the chat 

Broadcasting. Broadcasting means sending a message to all connected clients. ... We can send the message to all the connected clients,

*/

io.on('connection', function(socket) {
  socket.on('user_join', function(data) {
    this.username = data;
    socket.broadcast.emit('user_join', data);
  });

  socket.on('chat_message', function(data) {
    data.username = this.username;
    socket.broadcast.emit('chat_message', data);
  });

  socket.on('disconnect', function(data) {
    socket.broadcast.emit('user_leave', this.username);
  });
});

http.listen(port, function() {
  console.log('Listening on *:' + port);
});
