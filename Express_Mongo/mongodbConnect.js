//copy paste from mongo atlas

const { connect } = require('mongodb'); 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://subhasree:subhasree123@cluster0.kjkid.mongodb.net/tcsdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("tcsdb").collection("students");
  // perform actions on the collection object
  console.log("connected",collection);
  client.close();
});
