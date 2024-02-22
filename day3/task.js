/* returns admin
var name ='John'

function sayHi(){
    alert(name)
}
name='admin'
sayHi();*/

function makeWorker(){
    var name="Pete";
    return function (){
        alert(name)
    };
}
//alert(name);
var name = "John";
var work = makeWorker();
work();