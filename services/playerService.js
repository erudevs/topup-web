import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getAPIFeaturedGame() {
  const URL = "players/landingpage";

  const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getAPIDetailVoucher(id) {
  const URL = `players/${id}/detail`;

  const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getAPICategory() {
  const URL = "players/category";

  const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}?_sort=name&_order=ASC`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}
