const axios = require("axios")
const env= require("dotenv").config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.NODE_OPTIONS="--openssl-legacy-provider"
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log("aaa")
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

const apiGet = async (url, headers) => {
    const data = await axios.get(url,
        {
            headers
        })

        // console.log(data.data)
    return data
}


const apiPost = async (url, body, headers) => {
    const data = await axios.post(url, body,
        {
            headers
        })

        // console.log(data.data)
    return data
}

const apiPut = async (url, body, headers) => {
    const data = await axios.put(url, body,
        {
            headers
        })

        // console.log(data.data)
    return data
}

module.exports ={
    apiPost,
    apiGet,
    apiPut
}