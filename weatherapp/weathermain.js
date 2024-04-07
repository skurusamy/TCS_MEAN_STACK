//using call back
/*var weather = require('./app.js');
var location =require('./location.js');

var argv = require('yargs')
.option('location',{
    alias:'l',
    demand:false,
    type:'string'
}).help('help').argv

if(typeof argv.l ==='string' && argv.l.length >0){
    weather(argv.l,function(callback){
        console.log(callback)
})
}else{
    console.log('getting default location')
    location(function(location){//gets location from location info
        if(location){
        weather(location,function(callback){
            console.log(callback)
        })
        }else{
            console.log('unable to track location')
        }
    })
}*/

// using promise
var weather = require('./weatherpromise.js');
var location =require('./locationpromise.js');

var argv = require('yargs')
.option('location',{
    alias:'l',
    demand:false,
    type:'string'
}).help('help').argv

if(typeof argv.l ==='string' && argv.l.length >0){
    weather(argv.l).then(function(currentWeather){
        console.log(currentWeather)
    }).catch(function(error){
        console.log(error);
})
}else{
    console.log('getting default location')
    location().then(function(loc){
        return weather(loc)
    }).then(function(currentWeather){
        console.log(currentWeather)
    }).catch(function(error){
        console.log(error)
    })
}
