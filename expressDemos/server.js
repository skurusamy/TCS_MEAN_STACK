var express = require('express')
var bp = require('body-parser')
var _ = require('underscore');
var middleware = require('./middleware.js');
const { extend } = require('underscore');


var app = express()

app.use(bp.urlencoded({extended:true})) // to get input from html

app.set('view engine','ejs')// to display output in html format

app.use(bp.json()) // converts incoming data into json automatically
/*
var userdata =[
    {
        name:'admin',
        email:'admin@gmail.com'
    },{
        name:'manager',
        email:'manager@gmail.com'
    }
]*/

// middleware.logger2 will be called only for show users--- since its mentioned as parameter in show users
//middleware .logger will be called for all the functions

app.use(middleware.logger)
var uid=0;
var userdata=[

]


app.use(express.static('public')) // this brings the index file from public folder
// ./showUsers is url (req->request and response) 
// also can type the url( http://localhost:3000/showUsers ) in post man to check if its working fine


app.get('/showUsers',middleware.logger1,(req,res)=>{ 
    res.render('index.ejs',{data:userdata}) // to send the values to client ; userdata is the value
    //res.json(userdata) // will receive response in json format
})

// to get user based on id

app.get('/showuser/:id',(req,res)=>{ 
    var tid = parseInt(req.params.id);
    console.log(tid);
    //var matchedID;

    var matchedID =_.findWhere(userdata,{id:tid});

    // this can be replaced by underscore

    /*userdata.forEach(function(todo){
        if(tid === todo.id){
            matchedID = todo
        }
    })*/
    if(matchedID){
        res.json(matchedID)
    }
    else{
        res.json(404).send();
        //console.log("no user found with that id")
    }
})

//delete the record
app.delete('/deleteuser/:id',(req,res)=>{
    var tid = parseInt(req.params.id);
    console.log(tid);
    //var matchedID;

    var matchedID =_.findWhere(userdata,{id:tid});

    // this can be replaced by underscore

    /*userdata.forEach(function(todo){
        if(tid === todo.id){
            matchedID = todo
        }
    })*/
    if(matchedID){
        userdata = _.without(userdata,matchedID);
        res.json(matchedID)
    }
    else{
        res.json(404).send();
        //console.log("no user found with that id")
    }
})




//to add user
app.post('/addUser',(req,res)=>{
    var data = req.body;
    data.id=uid++;
    userdata.push(data);
    res.send(data);
})

app.listen(3000,()=>{  // listens in port 3000
    console.log("server is listenning in the port 3000")
})

// put to update
app.put('/updateUser/:id',(req,res)=>{
    var tid = parseInt(req.params.id);
    console.log(tid);
    //var matchedID;

    var matchedID =_.findWhere(userdata,{id:tid});
    if(matchedID){
        var body =_.pick(req.body,'name','email');
        var mydata={}
        mydata.name = body.name;
        mydata.email = body.email;
        _.extend(matchedID,mydata)
        res.json(matchedID)
    }
    else{
        res.json(404).send();
        //console.log("no user found with that id")
    }
})