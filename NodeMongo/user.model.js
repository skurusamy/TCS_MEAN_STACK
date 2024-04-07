const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    uname:{
        type:String
    },
    email:{
        type:String
    }
})
module.export = mongoose.model('users',userSchema)