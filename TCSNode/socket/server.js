var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static('public'));

io.on('connection',function(socket){
    console.log('user is via socket')
    // message from client
    socket.on('message',function(message){
        console.log('New Message from client..',message.text)
        // to send to all other clients 
        socket.broadcast.emit('message',message)
        //To send within the same client
        socket.emit('message',message);
    })
    socket.emit('message',{text:'hey client this is a welcome message from serve..'})
})

http.listen(3000,()=>{
    console.log('server is listening 3000')
})