var mongoose = require('mongoose');
var User = mongoose.model('User',{
    type: String,
    required: true,
    minlength: 1,
    trim: true

});
module.exports ={User};