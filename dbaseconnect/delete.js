var MongoClient = require ("mongodb").MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err)throw err;
    console.log('mongodb server started...')
    var dbo = db.db("mydb")
    var myquery={name: 'raj'}
    dbo.collection('customer').deleteOne(myquery, function(err, res){
        if(err)throw err;
        console.log('Number of documents deleted...' + res.deletedCount);
        db.close();
    })
})