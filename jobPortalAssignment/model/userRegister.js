const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Email:{
      type:String,
      required:true
    },
    Password:{
      type:String,
      required:true
    }
});

const User=mongoose.model('User', UserSchema)
module.exports=User