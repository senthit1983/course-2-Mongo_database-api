const express = require('express');
const bodyParser = require ('body-parser');

var {mongoose}= require('./db/mogoose');
var {sample} = require('./models/sample');
// var {user} = require('./models/user');

const app = express();
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
app.use(bodyParser.json({limit:'50mb'}));

app.post('/sample', (req, res)=>{
    var sampleobj = new sample({
        text: req.body.text
    });
    sampleobj.save().then((doc)=>
{
    res.send(doc);
},(e)=>{
        res.status(400).send(e);
    });
})
app.get('/sample',(req, res)=>{
    sample.find().then((sampleobj)=>
{
    res.send({sampleobj});
},(e)=>{
        res.status(400).send(e);
    });
})
app.listen(8080,()=>{ console.log('server is running at 8080')});