/*let data=123
if(true){ // let is a block level variable... so 432 will not be accessible outside the of block
    let data = 432
    console.log(data)
}
console.log(data)
*/

var index=0;
var array = [1,2,3]
for(let index=0;index<array.length;index++){
    console.log(array[index])
}
console.log(index)