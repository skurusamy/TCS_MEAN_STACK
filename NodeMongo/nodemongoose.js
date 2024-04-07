require('./dbconnect')

var express = require('express');
var bp = require('body-parser');
const mongoose = require('mongoose');
var User = require('./user.model');

var app = express();
app.use(bp.json());


app.listen(3000,()=>{
    console.log('Server is ready');
})






app.post('/adduser',(req,res)=>{
    
    var data = req.body;
    var user = new User(data.uname,data.email);
    user.save();


})


app.get('/getUsers',(req,res)=>{
    collection.find().toArray().then(result=>{
        console.log("Viewing user");
        res.send(result);
    })
})

app.delete('/deleteUser/:name',(req,res)=>{
    const data = req.params.name;
    collection.deleteOne({"uname" : data})
    //res.send(data);
    res.send("Record deleted")
})

app.put('/updateUser/:name',(req,res)=>{
    const data = req.body;
    var name =  req.params.name;
    collection.updateOne({"uname":name},{$set:data}).then(result=>{
        res.send(data);
    })
})