import axios from 'axios'

export const uUserClient = axios.create({
    baseURL: 'http://localhost:3001', //generally network address
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})