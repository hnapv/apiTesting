const { apiPost, apiGet } = require("../../utils/axiosCustomize");

const genRegisterForm = async (cusInfo) => {
  try {
    const data = await apiPost(
      "https://app-nhs-retail-gen-image-service.apps.dr-m3-ocp-dev02.test.pvcb.vn/v1/onboarding/gen-model",
      cusInfo
    );
    console.log("dataa==>", data.success);
    return data;
  } catch (err) {
    console.log(err + "");
  }
};
// genRegisterForm()
module.exports = {
  genRegisterForm,
};
