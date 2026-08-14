import api from '../utils/axios'

const saveJobs = async (data) => {
    const response = await api.post('/savejobs', data)
    return response.data
}

const getAllJobs = async (data) => {
    const response = await api.get('/getjobs', data)
    return response.data
}

const applyForJob = async (data) => {
    const response = await api.post('/apply', data)
    return response.data
}

export default { saveJobs, getAllJobs, applyForJob }