var express = require('express') // npm i express --save
var mongodb = require('mongodb') // npm i mongodb --save

var app = express()
app.use(express.static('public')) 
app.listen(3000,()=>{  // listens in port 3000
    console.log("server is listenning in the port 3000")
})