import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-production-176c.up.railway.app'
})

export default api;