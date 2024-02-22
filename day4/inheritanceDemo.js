class Animal{
    constructor(legs){
        this.legs = legs
    }
    walk(){
        console.log("Walking with "+this.legs+" legs")
    }
}
class Bird extends Animal{
    constructor(legs){
        super(legs)
    }
    fly(){
        console.log("birds can fly")
    }
}

let bird = new Bird(2);
bird.walk();
bird.fly();