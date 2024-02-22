function switchDemo(){

//var myvalue=prompt("Enter a value: ");
myvalue = document.getElementById("val").value;
switch(myvalue){
    case 'a': console.log('the value is grade a')
            break;
    case 'b': console.log('the value is grade b')
            break;
    default:
            console.log('nothing matched');
    
}
//console.log('exit');
document.getElementById("switchAns").innerHTML="The value given is: "+myvalue;
}