const fs = require ("fs");
const { genRegisterForm } = require("../services/pvcbServices/onboardingServices");
const form = async()=>{
    const info= {
        mobilePhone :"0966564410",
        email: "hoangdd@pvcombank.com.vn",
        name :"NGUYỄN THỊ VÂN",
        dob:"1997-09-13",
        nationality:"Việt Nam",
        idNumber:"0271970019066185",
        confirmDateTime:"",
        issueDate:"2021-04-25",
        expDate:"2037-09-13",
        issuePlace: "CỤC CẢNH SÁT QUẢN LÝ HÀNH CHÍNH VỀ TRẬT TỰ XÃ HỘI",
        nativePlace:"AN BÌNH, THUẬN THÀNH, BẮC NINH",
        permanentAddress:"12Q5 TỔ 13 MỚI, TƯƠNG MAI, HOÀNG MAI, HÀ NỘI",
        contactAddress:"12Q5 TỔ 13 MỚI, THÀ NỘI",
        gender:"FEMALE",
        localDebit:true,
    }
    const genForm = await genRegisterForm(info)
    // console.log("gen form ==>",genForm)
    const pdfData = Buffer.from(genForm.data, 'base64');
    // console.log("pdf data ===>",pdfData)
    fs.writeFile('./test.pdf', pdfData, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      })
}
form()