var request = require('request');

module.exports = function(location,callback){

var el = encodeURIComponent(location)
console.log(location);
var url=`http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=53e37a0f6cf8056323ab77af24743393&units=metric`
//var url='http://api.openweathermap.org/data/2.5/weather?q=harrison,usa&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric'

if(!location){
    return callback("no location provided")
}
request({
    url:url,
    json:true
},function(error,respone,body){
    if(error){
        callback('error found')
    }else{
        callback(`its ${body.main.temp} in ${body.name} 
        pressure: ${body.main.pressure} , 
        humidity: ${body.main.humidity} ,
        Description: ${body.weather[0].description} ,
        wind speed: ${body.wind.speed}`)
    }
})
}