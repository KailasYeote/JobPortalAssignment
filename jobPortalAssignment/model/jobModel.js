const mongoose=require("mongoose")

const JobSchema=mongoose.Schema({
  jobTitle:{
    type:String, 
    required:true
  },
  companyName:{
    type:String, 
    required:true
  },
  Location:{
    type:String, 
    required:true
  },
  experience:{
    type:String,
    required:true
  },
  salary:{
    type:String, 
    required:true
  },
  jobType:{
    type:String, 
    required:true
  },
  skills:{
    type:String, 
    required:true
  },
save: {
  type: Boolean,
  default: false
}
})

const Jobs=mongoose.model('jobs',JobSchema)
module.exports=Jobs