/*var counter =(function(){
    var privateCounter = 0;
    function changeBy(val){
        privateCounter+= val;
    }
    return{
        increment : function(){
            changeBy(1)
        },
        decrement : function(){
            changeBy(-1)
        },
        value : function (){
            return privateCounter;
        }
    }

})()

alert(counter.value()) // initial value
counter.increment();
counter.increment(); // counter = 2
alert(counter.value());
counter.decrement();
alert(counter.value());*/

//action using buttons
var counter =(function(){
    var privateCounter = 0;
    function changeBy(val){
        privateCounter+= val;
    }
    return{
        increment : function(){
            changeBy(1)
        },
        decrement : function(){
            changeBy(-1)
        },
        value : function (){
            return privateCounter;
        }
    }

})()


function inc(){
    counter.increment();
    document.getElementById("incRes").innerHTML = "Incremented to "+counter.value();
}
function dec(){
    counter.decrement();
    document.getElementById("decRes").innerHTML = "Decremented to "+counter.value();
}