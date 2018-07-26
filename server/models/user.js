const mongoose = require('mongoose');
const validator = require('validator');

// {
//     email: 'senth@gmail.com';
//     password : 'sen123';
//     tokens:[{
//         access: 'auth',
//         token: 'very strong'

//     }]
// }


var User = mongoose.model('User',{
    email:{
        type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
        validator: validator.isEmail,

        message:`{VALUE} is invalid email` 
    } ,
    password:{
        type: String,
        required: true,
        minlength: 6,
        tokens:[{
            access:{
                type: String,
                required: true
            },
            token:{
                type: String,
                required: true
            }
        }]

        }

    }
});
module.exports ={User};