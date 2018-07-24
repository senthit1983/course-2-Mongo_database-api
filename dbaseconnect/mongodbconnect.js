
const MongoClient = require ('mongodb').MongoClient;
//const {MongoClient, objectId} = require ('mongodb');
MongoClient.connect("mongodb://localhost:27017/", (err, db)=>{
    if(err) throw err;
    console.log('Conncted to Mongodb server');
    var dbo = db.db("mycoll")

  dbo.collection('emp').insertOne({name:'raja',salary:'20000'}, (err, result)=>{
   
            if(err){
            return console.log ("unable to insert the values"+err);
        }
            console.log(JSON.stringify(result.ops, undefined, 2));
    });
   // db.emp.find().toArray();
    db.close();
});