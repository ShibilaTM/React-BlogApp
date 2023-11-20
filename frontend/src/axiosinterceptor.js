import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'http://localhost:3456'  //backend base url
})

//Request interceptor
axiosInstance.interceptors.request.use((config)=>{

    //we have to add token to our request/access the token
    const accessToken = sessionStorage.getItem('userToken')

    //inserting the token to the header
    if(accessToken){
        if(config) config.headers.token = accessToken
    }
    return config;
    },(error)=>{
        return Promise.reject(error);
    }
)
export default axiosInstance