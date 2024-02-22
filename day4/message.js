// without export statement it cannot be imported also have to include type in script tag
//let message = 'Welcome to new World' 

//This will show eror message since  there is no server running 
//export let message ='Welcome to new World';

//Instead of running in server , we cannot also use the below statement 
//module.exports.message = 'Welcome to new World'


// Only solution is to add  the server

//Can only be used using function
let message='Welcome';
let getMessage = function(){
    return message.toUpperCase;
}
let setMessage = function (str) {
    message = str;
    
}
export {getMessage};