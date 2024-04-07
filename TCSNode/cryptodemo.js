var crypto = require('crypto-js');

var secretMessage={
    message:'Be Happy',
    secretValue:'Its me'
}
var secretKey ='dontdrive';
//AES(advanced encryption standard)
var encryptedMsg = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);
var bytes = crypto.AES.decrypt(encryptedMsg,secretKey);
var dm = JSON.parse(bytes.toString(crypto.enc.Utf8))

console.log('Encrypted message: ',encryptedMsg.toString())
console.log(dm);