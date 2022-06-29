import axios from "axios";
import Cookies from "js-cookie";

const callAPI = async ({
  url, method, data, token = false,
}) => {
  let headers = {};
  if (token) {
    const tokenCookies = Cookies.get("tkn");
    if (tokenCookies) {
      const jwtToken = Buffer.from(tokenCookies, "base64").toString("ascii");
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  if (response?.status > 399 || response?.error === 1) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };

  return res;
};

export default callAPI;
