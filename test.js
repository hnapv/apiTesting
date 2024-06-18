// const morgan = require("morgan")
const fs = require('node:fs');
const { apiGet, apiPost } = require("./app")

const testFlow = async()=>{
try{
    const loginInfo = {
        username: "264960" ,
        password: "Abcd@1234" ,
        device_id: "113.20.108.130" ,
        code_challenge: "f-oqx_O9fKwY9weTT1qtTG80jvzVcoZzlZ7j6PKybno=" ,
        verifier: "O-PB65Llp41xXV4dlCfUj7gwUqZzfD07XbhF3Zxt1tO46xnYEZvKbwrYTw6MqFf79gZpxXOc96YIquhlJO0ouA==" 
    }

    const {access_token} = await apiPost("https://accts.mbs.com.vn/webuaa/login",loginInfo,{'content-type': 'application/x-www-form-urlencoded'})
    const leaderAccountCode = "0088889"
    const response = await apiGet(`https://fot-api-web.mbs.com.vn/v1/accounts/copi24/wrapper/leader/portfolio?leaderAccountCode=${leaderAccountCode}&masterAccount=${loginInfo.username}`,{Authorization:`Bearer ${access_token}`})
        fs.writeFile('./test.txt', JSON.stringify(response.summary, null, 2), err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      })
}
catch(error){
    console.log({
        url: "Lỗi từ API "+ error.config.url,
        statusCode: error.response.status,
        message: error.response.data
    })
    // fs.writeFile('./test.txt', JSON.stringify(error.response), err => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       // file written successfully
    //     }
    //   })
}
}
testFlow()