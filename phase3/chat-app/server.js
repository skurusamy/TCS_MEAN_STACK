const { ETIME } = require('constants');
const express = require('express');
const http= require('http');
const socketio =  require('socket.io');
const formatMessage = require('./utils/messages');
//const  {userJoin,getCurrentUser,userLeave,getRoomUsers} = require('./utils/users');
const  {userJoin,getCurrentUser,userLeave,setRoomAfterLeft,addMessage} = require('./utils/dbconnect');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botname = "Bot"

//set static folder
app.use(express.static('public'));

//Run when client connects
io.on('connection',socket=>{

    socket.on('joinRoom',({username,room})=>{
       // console.log("In server ",username)
        const user = userJoin(socket.id,username,room);
        
        socket.join(user.room);

    // to send to single client
        socket.emit('message',formatMessage(botname,'Welcome to  chat app'))
    // Broadcast when a user connects, expects the sender
        socket.broadcast.to(user.room).emit('message',formatMessage(botname,`${user.username} has joined the chat`));
        
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            
        });


    //get users in that room
   // console.log("server 32",user.room);
    /*const roomppl = getRoomUsers(user.username,user.room);
    roomppl.then(function(userActive){
      //  console.log("server 34:",userActive)
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users:userActive,
            
        });
    })*/

    //send users and room info
    
});


    //Listen fro chat message
    socket.on('chatMessage',msg=>{
        const result =  getCurrentUser(socket.id);
        result.then(function(user){
            io.to(user.room).emit('message',formatMessage(user.username,msg));
            addMessage(socket.id,msg)
        })
       
    })


     //Runs whrn client disconnects
     socket.on('disconnect',()=>{
        // send to all
        const result = userLeave(socket.id);
        result.then(function(user){
            //console.log("in server.js 67",user);
            io.to(user.room).emit('message',formatMessage(botname,`${user.username} has left the chat`));
            localRoom = user.room;
            setRoomAfterLeft(user._id);
            /*const roomppl = getRoomUsers(user.username,localRoom);
            roomppl.then(function(userActive){
                io.to(localRoom).emit('roomUsers',{
                    room:localRoom,
                    users:userActive,
                    
                });
            })*/
            
            //setRoomAfterLeft();
            io.to(user.room).emit('roomUsers',{
                room:user.room
                
            });
        
        })
       
            // if user has left, remove it from the left panel
            
        
    })

});

const PORT = 3000 || process.env.PORT;
server.listen(PORT,()=>{
    console.log("Server running on port ",PORT)
})