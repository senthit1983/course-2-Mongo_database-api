var mongoclient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"
mongoclient.connect(url, function(err, db){
    if(err)throw wrr;
    console.log('Mongo server is starting...')
    var dbo = db.db('mydb')
    var myquery = { name: 'raj'}
    dbo.collection('customer').deleteOne(myquery, function(err, res){
        if(err)throw err;
        console.log('number of document deleted'+ res.deletedCount)
        db.close();

    })
})