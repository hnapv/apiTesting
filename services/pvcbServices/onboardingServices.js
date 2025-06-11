const { apiPost, apiGet } = require("../../utils/axiosCustomize");

const genRegisterForm = async (cusInfo) => {
  console.log(cusInfo)
  try {
    const data = await apiPost(
      "http://onboarding-camunda-uat.pvcombank.com.vn/api/ekyc/v1/gen-model",
      cusInfo,
      {
        Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwOTYzNDQyNTg1IiwiaWF0IjoxNzMyNzc3MDk5LCJleHAiOjE4MDAwMDE3MzI3NzcwOTl9.DhYgr0KTdrOQZGxEeB7TQ4uKeYfCe8u20fGa2MMYrR1k0e81rYmT-9YaaGC_A5JY67rATA1efsqAfCuS9cBLtQ="
      })
    console.log("dataa==>", data);
    return data;
  } catch (err) {
    console.log("lỗi là==>",err + "");
  }
};
// genRegisterForm()
module.exports = {
  genRegisterForm,
};
