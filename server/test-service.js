const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 3200;
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
app.use(bodyParser.json({limit:'50mb'}));
app.options('*', cors());
const server = http.createServer(app);
app.get('/', (req, res)=>{
    console.log("res")
})
server.listen(port);