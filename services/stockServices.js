const { apiPost, apiGet } = require("../utils/axiosCustomize")

const loginMBS = async(username, password)=>{
    const loginInfo = {
        username ,
        password ,
        device_id: "113.20.108.130" ,
        code_challenge: "f-oqx_O9fKwY9weTT1qtTG80jvzVcoZzlZ7j6PKybno=" ,
        verifier: "O-PB65Llp41xXV4dlCfUj7gwUqZzfD07XbhF3Zxt1tO46xnYEZvKbwrYTw6MqFf79gZpxXOc96YIquhlJO0ouA==" 
    }
    const data = apiPost("https://accts.mbs.com.vn/webuaa/login",loginInfo,{'content-type': 'application/x-www-form-urlencoded'})
    return data
}

const copi24LeaderPortfolio = async(leaderAccountCode,username,access_token)=>{
    const token = {Authorization:`Bearer ${access_token}`}
    const data= apiGet(`https://fot-api-web.mbs.com.vn/v1/accounts/copi24/wrapper/leader/portfolio?leaderAccountCode=${leaderAccountCode}&masterAccount=${username}`,token)
    return data
}

module.exports={
    loginMBS,
    copi24LeaderPortfolio
}
