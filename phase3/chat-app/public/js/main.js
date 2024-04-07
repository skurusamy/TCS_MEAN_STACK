// this file is front end java script

const chatForm=document.getElementById("chat-form");
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList= document.getElementById('users')
//get username and room from url
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix : true
});
//Join chat room

const socket =io();
socket.emit('joinRoom',{username,room})

//get room and users
socket.on('roomUsers',({room})=>{
    outputRoomName(room);
   // console.log("In main.js 19")
   // outputUsers(users);
})

socket.on('message',message=>{
    console.log(message);
    outputMessage(message);

    //scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
})

//Message after submiy
chatForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const msg = e.target.elements.msg.value;
    //console.log(msg);
    //Emiting the message to the server
    socket.emit('chatMessage',msg);

    //clear input message
    e.target.elements.msg.value="";
    e.target.elements.msg.focus();

});
// Output message to dom
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML =`<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
    ${message.text}</p>`;
    document.querySelector('.chat-messages').appendChild(div);

}
//add room room in side panel
function outputRoomName(room){
    //console.log("In 57 main:",room)
    roomName.innerText = room;
}
/*
//add users to side pannel
function outputUsers(users){
  /*  userList.innerHTML =`
    ${users.map(user=> `<li>${user.username}</li>`).join('')}
    `;
    userList.innerHTML="";
    users.forEach(item => {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        userList.appendChild(li);
    });
}*/