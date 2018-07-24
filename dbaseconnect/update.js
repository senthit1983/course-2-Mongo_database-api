var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"
MongoClient.connect(url, function(err, db){
    if(err)throw err;
    console.log('Mongodb server is started...')
    var dbo = db.db("mydb")
    var oldvalue = {address: 'gobi'}
    var newvalue = {$set:{name: 'bhavishnu', address:'kkp'}}
    dbo.collection("customer").updateOne(oldvalue, newvalue, function(err, res){
        if(err) throw err;
        console.log('number of documents updated'+res.upsertedCount)
        db.close();
    })
});