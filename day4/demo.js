//The function can become publioc function only if given 'this keyword' or 'prototype' keyword

/*
function Animal(type){
    this.type= type
    this.callme = function(){ //public fn
        console.log('call me')
        callme2()
    }
    //private function 
    function callme2(){  //private fn
        console.log('call me 2')
    }
}

//To add a function for Animal ---> outside the animal ("prototype"  is used) 
//identify is the name of the function
Animal.prototype.identify=function (){
    console.log("Inside Identify")
}

var dog = new Animal('dog');
dog.identify();
dog.callme();
//dog.callme2();  // This is a private function and cannot be called*/


/* modern and alternative java script code for the above code*/
class Animal{
    constructor(type){
        this.type = type
    }
    identify(){
        console.log(this.type)
    }
}
let dog = new Animal("DOG")
dog.identify()
