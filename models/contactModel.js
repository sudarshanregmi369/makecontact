 const mongoose = require("mongoose")

 const contactSchema = mongoose.Schema({
   user_id :{
      type:mongoose.Schema.Types.ObjectId, 
      required:true,
      ref:"User",
   },
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