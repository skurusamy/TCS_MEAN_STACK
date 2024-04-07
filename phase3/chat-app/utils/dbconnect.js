const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://subhasree:subhasree123@cluster0.kjkid.mongodb.net/phase3?retryWrites=true&w=majority";
//const uri="mongodb://localhost:27017/phase3"; 
var collection;
MongoClient.connect(uri,function(err,result){
    collection = result.db("phase3").collection("chatApp");
});

function userJoin(socketid,username,room){
    const user = {socketid, username, room};
    collection.insertOne(user).then(result=>{
        //console.log(result.ops);
        console.log("Inserted")
    })
    return user;
}


//Get the current user

function getCurrentUser(id){
    return new Promise((resolve,reject)=>{
        collection.findOne({"socketid":id},(err,result)=>{
            (err)?reject(err):resolve(result)
        })
    })
}



function userLeave(id){
    collection.update({"socketid":id},{$set:{socketid:"-1"}},{$project:{socketid:1,username:1,room:1}});
    return new Promise((resolve,reject)=>{
        collection.findOne({"socketid":id},(err,result)=>{
            (err)?reject(err):resolve(result)
        })
    })

}
function setRoomAfterLeft(id){
    collection.updateMany({"_id":id},{$set:{room:"no-longer-exists"}});
    
}

/*
// get room users 
function getRoomUsers(name,room){
    return new Promise((resolve,reject)=>{
        collection.find({"room":room}).toArray(function(err,result){
        //collection.find().toArray(function(err,result){
        if(err)
            reject("Errror",err)
        else{
            console.log("db 51",result)
            const users=[]
            for(let user of result){
            users.push(user.username);
            } 
           //console.log("db 49",result);
            resolve(users);

        }
        })
    })
}
*/

function addMessage(id,msg){
    msgs =[]
    collection.findOne({"socketid":id}).then(result=>{
        if(result.msg){
           // console.log("db 70",result.msg.length)
            for(i=0;i<result.msg.length;i++){
               // console.log("db 72",result.msg[i]);
                msgs.push(result.msg[i]);
            }
            msgs.push(msg)
            collection.update({"socketid":id},{$set:{msg:msgs}}); 
        } 
        else{
            msgs.push(msg);
            collection.update({"socketid":id},{$set:{msg:msgs}}); 
        }   
               
    })
    
   
    //console.log("db 73",msgs);
   
}
module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    setRoomAfterLeft,
    addMessage
}