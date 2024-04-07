var socket = io();

socket.on('connect',function(){
    console.log('Inside app.js that is connected to server')
})
socket.on('message',function(message){
    console.log('New Message ',message.text)
    jQuery('.messages').append('<p>' +message.text+ '</p>')
})

var $form = jQuery('#messageForm')
$form.on('submit',function(event){
    event.preventDefault();
    var $message = $form.find('input[name=message]')
    socket.emit('message',{
        text:$message.val()
    })
    $message.val('');
})