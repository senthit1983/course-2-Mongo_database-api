const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = 'abc123'

// bcrypt.genSalt(10,(err, salt)=>{
//     bcrypt.hash(password, salt, (err, hash)=>{
//         console.log(hash);
//     })
// })
var hashedPassword ='$2a$10$jdYATKnbfVAOQEXUQi.bveIr57XPrUIIAqN3tGeypBK6H/sWuFtzS';
bcrypt.compare(password, hashedPassword,(err, res)=>{
    console.log(res);
})

// var message = 'i am the user';
// var hash = SHA256(message);
// var data={
//     id: 3
// }
// var token = jwt.sign(data, 'hello');
// console.log(token);

// var decoded = jwt.verify(token, 'hello')
// console.log('decoded', decoded);

// console.log(`message: ${message}`);
// console.log(`hash : ${hash}`);

// var data={
//  id :3
// };

// var token ={
//     data,
//     hash : SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// var resulthash = SHA256(JSON.stringify(token.data)+'somesecret').toString()
// if(resulthash == token.hash){
//     console.log('message dont change')
// }
//     else{
//         console.log('message was changed , dont trust');
//     }
