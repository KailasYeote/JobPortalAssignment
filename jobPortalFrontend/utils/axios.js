import axios from 'axios'

const api = axios.create({
    baseURL: "http://10.159.32.238:3000/jobportal"
})


export default api;