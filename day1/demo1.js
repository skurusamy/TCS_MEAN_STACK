document.write("Welcome to javascript");

function demoClick(){
   /*var x = 10;
   var y =20;
   var z=x+y;
   alert("Ans: "+z)
   var a = Number(prompt("Enter first value: "));
   var b = Number(prompt("Enter Second value: "));*/
   var a = Number(document.getElementById("fvalue").value);
   var b = Number(document.getElementById("svalue").value);
   var c = a*b;
   var d = Number(document.getElementById("tvalue").value);
   var e = Number(document.getElementById("frvalue").value);
   document.getElementById("mulAns").innerHTML ="Multiplication result is :"+c;
   //console.log('Multiplication: '+c);
   if(e!=0){
       console.log('Division: '+d/e);
       document.getElementById("divAns").innerHTML ="Division result is :"+d/e;
   }
   else
    alert("Number cannot be divided by zero");
}
