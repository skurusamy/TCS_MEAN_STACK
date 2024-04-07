//to find location 

var request = require('request');

var url ="http://ipinfo.io"

module.exports = function(callback){
request({
    url:url,
    json:true
},function(error,response,body){
    if(error){
        callback('nothing found');
    }
    else{
        callback(response.body.city) // gives lattitude and longitute

    }
})
}