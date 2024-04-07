

var express = require('express');
var bp = require('body-parser');
const { response } = require('express');

var app = express();
app.use(bp.json());


app.listen(3000,()=>{
    console.log('Server is ready');
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://subhasree:subhasree123@cluster0.kjkid.mongodb.net/tcsdb?retryWrites=true&w=majority";
var collection;
MongoClient.connect(uri,function(err,result){
    collection = result.db("tcsdb").collection("students");
    //console.log(collection);
});
//console.log("!!!!!!!!!!!!",client);





app.post('/adduser',(req,res)=>{
    
    var data = req.body;
    collection.insertOne(data).then(result=>{
        console.log(result);
        res.send('user is added');
    })
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