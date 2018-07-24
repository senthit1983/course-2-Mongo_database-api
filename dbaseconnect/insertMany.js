var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/"
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log('mongodb server connectec');
    var dbo = db.db("mydb");
    myobj =[{name:'sai', address: 'kkp'},
            {name: 'raj', address: 'chennai'},
            {name: 'priya', address: 'karur'},
            {name: 'anand', address: 'covai'}]
    dbo.collection('customer').insertMany(myobj, function(err, res){
        if(err)throw err;
        console.log("number of Document inserted : " +res.insertedCount);
        db.close();
    })

});