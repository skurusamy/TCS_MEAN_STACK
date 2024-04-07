var express = require('express');
var bp = require('body-parser');
var db = require('./db.js')
var _ =  require('underscore')

var app = express()
app.use(bp.urlencoded({extended:true}))

app.use(bp.json())
app.use(express.static('public')) 

db.sequelize.sync().then(function(){
    app.listen(3000,function(){
        console.log("server is listening in the port 3000....")
    })
})

app.post('/addUser',(req,res)=>{
    var body = _.pick(req.body,'uname','email')

    // create is the inbuild function

    db.todo.create(body).then(function(todo){
        res.json(todo)
    })
})

// to get as json file
/*
app.get('/getUsers',(req,res)=>{
    db.todo.findAll().then(function(todos){
        res.json(todos)
    })

})*/

// to get result in html format 
app.get('/getUsers',(req,res)=>{
    db.todo.findAll().then(function(todos){
        res.render('index.ejs',{user:todos})
       // res.json(todos)
    })
})