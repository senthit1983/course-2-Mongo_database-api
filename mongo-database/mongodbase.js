
var mongoclient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/"

// create a database and insert the documents to collecion(customer) in databse
mongoclient.connect(url, function(err, db){
    if(err)throw err;
    console.log('mongodb server started...');
    var dbo = db.db("mydb");
   
    var morevalues=[{name: 'infinijith', address: 'cbe'},
                    {name: 'infosys', address: 'chennai'},
                    {name: 'wipro', address: 'delhi'},
                    {name: 'patni', address: 'mumbai'},
                    {name: 'hp', address: 'malasiya'}];
    dbo.collection('customer').insertMany(morevalues , function(err, res){
        if(err)throw err;
        
        console.log(JSON.stringify(res, undefined, 2));  
        res.se
    })

    // select the documents from collectio in database
    function search(){
    dbo.collection('customer').find().toArray(function(err, res){
        if(err)throw err;
        console.log(JSON.stringify(res, undefined, 2));
        
    
    })
}
// update the documents to collection in database
    var oldvalue = {address:'cbe'}
    var newvalue= {$set:{ name:'software', address:'gobi'}}
    dbo.collection('customer').update(oldvalue, newvalue, function(err, res){
        if(err)throw err;
        console.log('No of documents updated ..'+ res)
    })
    search();
// Delete many documents from database
    var delval = { name:'hp'}
    dbo.collection('customer').deleteMany(delval, function(err, res){
        if(err)throw err;
        console.log('no of documents deleted ' +res.deletedCount)
    })
    search();
    // dbo.collection('customer').find().toArray(function(err, res){
    //     if (err)throw err;
    //     console.log(JSON.stringify(res, undefined,2))
    // })
    // sorting the documents in ascending
    var mysort={name: 1};
    dbo.collection("customer").find().sort(mysort).toArray(function(err, res){
        if(err)throw err;
        console.log(res);
        db.close();
    })
    db.close();
   
});
