const controller=require("../controller/jobController")
const express=require('express')
const router=express.Router()


router.post('/jobportal/savejobs', controller.saveJobs)

router.get("/jobportal/getjobs", controller.GetJobs)

module.exports=router