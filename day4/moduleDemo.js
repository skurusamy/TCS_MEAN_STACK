import {getMessage} from './message.js'

console.log(getMessage())
const newTag = document.createElement('h1');
document.body.appendChild(newTag);
//newTag.textContent = 'Welcome';
newTag.textContent = getMessage();
