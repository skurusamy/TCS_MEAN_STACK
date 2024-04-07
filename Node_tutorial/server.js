/*
console.log("this is subhasree")

const math = require('./math.js')
console.log(math.add(3,8))
*/

const fs  = require("fs")
fs.readFile('./sample.txt', (err,data) => {
    console.log(data.toString())
    }
)

