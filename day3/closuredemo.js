//Closure----> Function within the function

/*
function outerFunction(){
    var outervar =10;

    function innerFunction(){
        alert(outervar)
    }
    return innerFunction;
}
var inf = outerFunction();
// even after closing outer function.. Inner function can be called separetly
//innerFunction();  --->this cannot be called instead inf() should be called
//inf is the reference to the inner function
inf();

*/
/* The variables in outer function can be modified in inner function*/

function  outerFunction(){
    var outervar = 10;
    function innerFunction(){
        return outervar+=1;
    }
    return innerFunction;
}
var res = outerFunction();
alert(res());
alert(res());
alert(res());
alert(res());