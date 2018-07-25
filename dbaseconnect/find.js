var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log('mongoclinet server started ');
    var dbo= db.db("mydb");
    //var myobj = { name: 'raj'};
    // find(), findOne()
    //limit(5)
    dbo.collection("customer").find().toArray(function(err, res){
        if(err)throw err;
        console.log(res);
        db.close();
    })
})