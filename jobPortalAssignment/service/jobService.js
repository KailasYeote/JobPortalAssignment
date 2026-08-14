const repository=require('../repository/jobRepo')


const saveJobs=async(data)=>{
try{
  const response=await repository.saveJobs(data)
  return response
}catch(error){
  console.log("unable to save data", error)
}
}

const getJobs=async(data)=>{
  try{
    const response=await repository.getJobs(data)
    return response
  }catch(error){
    console.log("unable to fetch data", error)
  }
}

module.exports={ saveJobs, getJobs }