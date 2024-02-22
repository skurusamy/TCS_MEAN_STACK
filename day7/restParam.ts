//...

function Welcome(greet:string, ...name:string[]){
    return console.log(greet +" "+name.join(",")+ " !!"); 
}
Welcome("Welcome","admin","manager") // first arg is greet and rest everything is string
Welcome('Hello','subha');