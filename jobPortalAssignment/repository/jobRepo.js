const Jobs=require('../model/jobModel')


const saveJobs=(data)=>{
  const response=Jobs.create(data)
  return response
}

const  getJobs=(data)=>{
  const response=Jobs.find()
  return response
}

module.exports={saveJobs, getJobs}