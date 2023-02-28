const mongoose = require('mongoose');
const linkSchema = new mongoose.Schema({
    name: {type:String, required:true},
    endereco:String,
    phone:{type:Number, required:true},
    email:{type:String, required:true},

})

module.exports = mongoose.model('Link', linkSchema);