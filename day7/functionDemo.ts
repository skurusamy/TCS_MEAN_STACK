function add(a:string,b:string):string //return type at the end

function add(a:number,b:number):string

function add(a:any,b:any):any{// any: when not sure about data type
    return a+b;
} 

console.log(add('Subha','sree'));
console.log(add(10,12));
//console.log(add('subha',24));