// to check what kind of records  are stored
//Sequelize variable name
//sequelize depenedency name
var Sequelize = require('sequelize');

// __dirname --> current directory
var sequelize= new Sequelize(undefined,undefined,undefined,{
    'dialect' :'sqlite',
    'storage': __dirname +'/data/userdata.sqlite'
})

var db={}
db.todo = sequelize.import(__dirname + '/models/todo.js')
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;