const env = require('dotenv').config({path:"../.env"})
console.log(process.env.USERNAME_MBS)
const fs = require('node:fs');
const { loginMBS, copi24LeaderPortfolio } = require('../services/personalServices/stockServices');

const testFlow = async () => {
  try {
const start = Date.now();

    const username = process.env.USERNAME_MBS
    const password = process.env.PASSWORD_MBS
    const { access_token } = await loginMBS(username, password) 
    const leaderAccountCode = "0088889"
    const response = await copi24LeaderPortfolio(leaderAccountCode, username, access_token)
    fs.writeFile('./test.txt', JSON.stringify(response.summary, null, 2), err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    })
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
  }
  catch (error) {
    console.log(error + "")
    console.log({
      url: "Lỗi từ API " + error.config.url,
      statusCode: error.response.status,
      message: error.response.data
    })
  }
}

testFlow()