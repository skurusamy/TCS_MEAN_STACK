const mongoose = require('mongoose');

const uri = "mongodb+srv://subhasree:subhasree123@cluster0.kjkid.mongodb.net/tcsdb?retryWrites=true&w=majority";

mongoose.connect(uri,{useUnifiedTopology:true},(err)=>{
    console.log("Connected");
})
require('./user.model')