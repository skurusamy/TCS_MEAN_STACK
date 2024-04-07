var argv = require('yargs')
.command('adduser', 'Greet the user',function(yargs){
    yargs.options({
        name:{
            demand:true, //name property cannot be null
            alias:'n',
            description:"Please Enter your name",
            type:'string'
        },
        email:{
            demand:true, //name property cannot be null
            alias:'e',
            description:"Please Enter your email",
            type:'string'
        },
        city:{
            demand:true, //name property cannot be null
            alias:'c',
            description:"Please Enter your city",
            type:'string'
        },
        password:{
            demand:true, //name property cannot be null
            alias:'p',
            description:"Please Enter your password",
            type:'string'
        },
        department:{
            demand:true, //name property cannot be null
            alias:'d',
            description:"Please Enter your department",
            type:'string'
        },

    }).help('help')
}).help('help')
.argv

var command = argv._[0];
console.log(argv);

console.log(`hello ${argv.name}!! 
    Please Find your below details:  
        Email: ${argv.email}
        City: ${argv.city}
        Password: ${argv.password}
        Department: ${argv.department}`)