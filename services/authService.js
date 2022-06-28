import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data) {
  const URL = "auth/signup";

  const response = await axios.post(`${API_URL}/${API_VERSION}/${URL}`, data).catch((err) => err.response);
  if (response?.status === 400 || response?.error === 1) {
    return response;
  }

  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function setLogin(data) {
  const URL = "auth/signin";

  const response = await axios.post(`${API_URL}/${API_VERSION}/${URL}`, data).catch((err) => err.response);
  if (response?.status > 399 || response?.error === 1) {
    const res = {
      error: true,
      message: response.data.message,
      data: "",
    };
    return res;
  }

  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };

  return res;
}
