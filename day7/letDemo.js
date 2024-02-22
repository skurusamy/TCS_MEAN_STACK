/*let data=123
if(true){ // let is a block level variable... so 432 will not be accessible outside the of block
    let data = 432
    console.log(data)
}
console.log(data)
*/
var index = 0;
var array = [1, 2, 3];
for (var index_1 = 0; index_1 < array.length; index_1++) {
    console.log(array[index_1]);
}
console.log(index);
