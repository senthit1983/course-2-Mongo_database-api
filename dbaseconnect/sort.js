var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
MongoClient.connect(url, function(err, db){
    if(err)throw errconsole.log('mongondb server is started');
    var dbo = db.db("mydb");
    var mysort={name: 1};
    dbo.collection("customer").find(mysort).sort(mysort).toArray(function(err, res){
        if(err)throw err;
        console.log(res);
        db.close();
    })
});