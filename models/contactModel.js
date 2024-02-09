 const mongoose = require("mongoose")

 const contactSchema = mongoose.Schema({
     name: { type: String,
        required: [true ,"Name"]},
     email: { type: String,
        required: [true,"email me"]},
     phone : { type: String, 
        required: [true,"Phone me  "]},
     },
     { timestamps: true, }
 );
 module.exports = mongoose.model('Contact',contactSchema);