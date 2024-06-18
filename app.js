const axios = require("axios")
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("aaa")
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

// apiGet("https://fot-api-web.mbs.com.vn/v1/accounts/copi24/wrapper/leader/portfolio?leaderAccountCode=0088889&masterAccount=264960",{
//     Authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5WENObDU5UVdjbFR3YmZCWnlmRmxLMlVDLTVKV1M1MjhJYVcwU0xfUTVzIn0.eyJleHAiOjE3MTg2NDExMTgsImlhdCI6MTcxODY0MDgxOCwianRpIjoiNjE0NDc0ZGEtZjVkYi00YTEwLWI4MWMtZDIwZmI2ODdiYzIwIiwiaXNzIjoiaHR0cHM6Ly9hY2N0cy5tYnMuY29tLnZuL2F1dGgvcmVhbG1zL3BlcmljbGVzIiwiYXVkIjoiZm90Iiwic3ViIjoiYjBhNDk2ODktYmI3Ny00YzI3LWI5MGUtNWVhNTM2NGFkNTQyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiczI0d2ViYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjIxZjhhYjdmLTg2NzAtNGRlZS1iNzIzLTg1ZGNiOWM5NzM2NiIsInJlc291cmNlX2FjY2VzcyI6eyJmb3QiOnsicm9sZXMiOlsiVXNlciIsIkludmVzdG9yIl19fSwic2NvcGUiOiJ0cmFkZXIiLCJzaWQiOiIyMWY4YWI3Zi04NjcwLTRkZWUtYjcyMy04NWRjYjljOTczNjYiLCJ0cmFkZUFjY291bnRzIjoiMjY0OTYwIiwiYWNjRGVyaXZhdGl2ZSI6Ilt7XCJhY2NvdW50XCI6XCIyNjQ5NjBEXCIsXCJzdGF0dXNcIjoxfV0iLCJhY2NNYXJnaW4iOiJbe1wiYWNjb3VudFwiOlwiMjY0OTYwOFwiLFwic3RhdHVzXCI6MX1dIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjY0OTYwIiwiYWNjQ2FzaCI6Ilt7XCJhY2NvdW50XCI6XCIyNjQ5NjAxXCIsXCJzdGF0dXNcIjoxfV0ifQ.B8uwAHrekezA2VexdqZV6CLmgfiFE4EUGPmCwaAFUdqEpl5gH-UjZcRp7FSCzX7e3nczNt4wa4eJhFAWDhOiRnsf-OjZE0hAhUqbXPopT6v8Wc2jIIdtQlLevH0c4p7zQUVN-J_Ra6dQ1ptlwXqUULTTcZHV9_gEpv5v6arFZy2yU2bxb0iWCO82GRMKbByU6zKcKr_9ZWO4SQ5371YQAAYppr2J8lg2jlAtJTliSaJkNKxIVjp_z8kTy9Ryn9EplsgRtGsiFUYaa1oOLZS6yIL8cfzaGoDv8icMGxgHRlgYwKT3bnQJ9LJd5mlhVApmo9jqAgaedg9mKq3AcvfGpA"
// }).then(a =>console.log("test==<",a)).
// apiPost("https://ekyc-sandbox.eidas.vn/eid/v1/findLogRequestDetail/?requestId=ae0d2730-04fb-48ab-8e16-1a3151149f2e", {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
// }, {
//     'clientid': 'bcee677e-b023-40b6-b02c-ede351839c6c',
//     'signature': '66b1b48bc0a40f162d7e13eddff586f993afe294dbceb39f0b36b86a45bf1629'
// })
module.exports ={
    apiPost,
    apiGet,
    apiPut
}