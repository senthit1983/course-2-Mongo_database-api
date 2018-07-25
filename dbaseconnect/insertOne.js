var MongoClient = require ('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
MongoClient.connect(url, function(err, db){
    if(err) throw err;
        console.log("Mongodb server connected");
    var dbo = db.db("sampleDB");
    var myobj = {name:'kumar',address: 'gobi'};
    dbo.collection("cust").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 document created");
        db.close();
    })
})