const fs = require("fs");
const {
  genRegisterForm,
} = require("../services/pvcbServices/onboardingServices");
// const text= ""
const form = async () => {
  const info = {
    "mobilePhone": "038729118200",
    "email":"123123123@gmail.com",
    "name": "Nguyễn Thị Hải Yến",
    "dob": "1991-01-06",
    "nationality": "Việt Nam",
    "idNumber": "02619101110180",
    "confirmDateTime": "19072024043159",
    "issueDate": "2022-09-29",
    "issuePlace": "CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI",
    "expDate": "2031-01-06",
    "nativePlace": "Tổ 7, Trưng Trắc, Phúc Yên, Vĩnh Phúc",
    "permanentAddress": "Tổ 7, Trưng Trắc, Phúc Yên, Vĩnh Phúc",
    "contactAddress": "Tổ 7, Trưng Trắc, Phúc Yên, Vĩnh Phúc",
    "gender": "MALE",
    "smsOTP": "x", //ko có sms thì để trống
    "type": "C06", //C06 thì tick hạn mức 100tr
    "username": "038721198235",
    "biometric": true //true là tick biometric và hiển thị sinh trắc học
    // "localDebit": true
  };
  const genForm = await genRegisterForm(info);
  console.log("gen form ==>",genForm)
  const pdfData = Buffer.from(genForm.data, "base64");

  // const pdfData = Buffer.from(text, "base64");
  // console.log("pdf data ===>",pdfData)
  fs.writeFile("./test.pdf", pdfData, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
};
form();
