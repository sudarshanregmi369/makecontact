const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter the user name '] },
    password:{
    type: String, 
    required :[true,'Please provide a password']},

    email:{ 
        type:String,
        required:[true, 'email is already taken']},
    },
    {timestamps: true}
    )
       
module.exports = mongoose.model('User',userSchema);