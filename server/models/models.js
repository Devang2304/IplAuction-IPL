const mongoose = require('mongoose');

const users= new mongoose.Schema({
    name:{type:String, required:true},
    password:{type:String, required:true}
})

const teamUser =mongoose.model('teamUser',users);

module.exports = teamUser;