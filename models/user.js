const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})
// users will become the table in the database
module.exports = mongoose.model('users',user) 