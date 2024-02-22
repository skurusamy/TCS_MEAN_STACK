var express = require('express')
var bp = require('body-parser')
var _ = require('underscore');


var app = express()
app.use(bp.urlencoded({extended:true}))

app.use(bp.json()) // converts incoming data into json automatically
app.set('view engine','ejs')

var pid=1;
var projectdata=[]

app.use(express.static('public')) 
app.listen(3000,()=>{  // listens in port 3000
    console.log("server is listenning in the port 3000")
})
//add projects
app.post('/addproject',(req,res)=>{
    var data = req.body;
    data.id=pid++;
    projectdata.push(data);
    console.log(projectdata)
    console.log(data);
    res.send(data);
})

// to display all projects
app.get('/showProjects',(req,res)=>{ 
    res.render('index.ejs',{project:projectdata}) 
    //res.json(projectdata) // will receive response in json format
})

// to get project based on id
app.get('/showProject/:id',(req,res)=>{
    var tid = parseInt(req.params.id);

    var matchedID =_.findWhere(projectdata,{id:tid});

    if(matchedID){
        res.json(matchedID)
    }
    else{
        res.json(404).send();
    }
})

//delete the record
app.delete('/deleteProject/:id',(req,res)=>{
    var tid = parseInt(req.params.id);
    console.log(tid);

    var matchedID =_.findWhere(projectdata,{id:tid});

    if(matchedID){
        projectdata = _.without(projectdata,matchedID);
        res.json(matchedID)
    }
    else{
        res.json(404).send();
        //console.log("no user found with that id")
    }
})






// put to update
app.put('/updateproject/:id',(req,res)=>{
    var tid = parseInt(req.params.id);
    console.log(tid);
    //var matchedID;

    var matchedID =_.findWhere(projectdata,{id:tid});
    if(matchedID){
        var body =_.pick(req.body,'proname','location','no_mem','procost','manager_name');
        var mydata={}
        mydata.proname = body.proname;
        mydata.location = body.location;
        mydata.no_mem = body.no_mem;
        mydata.procost = body.procost;
        mydata.manager_name = body.manager_name;
        _.extend(matchedID,mydata)
        res.json(matchedID)
    }
    else{
        res.json(404).send();
        //console.log("no user found with that id")
    }
})