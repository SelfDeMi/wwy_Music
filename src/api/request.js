import axios from 'axios'
let request = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Access-Control-Allow-Origin': 'http://localhost:8000',
        // "Access-Control-Allow-Credentials":"*",
        // withCredentials: true
    }
})
// request.interceptors.request.use()   请求拦截器
// request.interceptors.response.use()   响应拦截器
export default request