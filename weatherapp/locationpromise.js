//to find location , using promise instead of call back

var request = require('request');

var url ="http://ipinfo.io"

module.exports = function(){
    return new Promise(function(resolve,reject){

        request({
            url:url,
            json:true
        },function(error,response,body){
            if(error){
                reject('nothing found');
            }
            else{
                resolve(response.body.city) // gives lattitude and longitute
        
            }
        })
    })
}