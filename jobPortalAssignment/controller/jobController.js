const service=require('../service/jobService')


const saveJobs=async(req, res)=>{
  try{
    const data=req.body
    const response=await service.saveJobs(data)
    res.status(200).json(response)
  }catch(error){
    res.status(500).json({message:"Internal server error"})
    console.log("error occured during saving data")
  }
}

const GetJobs=async(req, res)=>{
  try{
    const response=await service.getJobs()
    res.status(200).json(response)
  }catch(error){
    res.status(500).json({message:"unable to get jobs"})
    console.log(
      "Unable to get jobs "
    )
  }
}

module.exports={saveJobs, GetJobs}