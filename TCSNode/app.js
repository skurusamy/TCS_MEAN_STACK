// require is the command to load a dependency
var storage = require('node-persist');
storage.initSync() //initializes the process with underlying file manager
storage.setItemSync('accounts',[{
    username:'Subha',
    balance:100
},
{
    username:'Lisha',
    balance:200
}])// to add something into the file name called account

// to retrive records

var accountDetails = storage.getItemSync('accounts');
console.log(accountDetails);