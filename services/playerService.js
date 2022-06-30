import callAPI from "../config/api";

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getAPIFeaturedGame() {
  const url = `${API_URL}/${API_VERSION}/players/landingpage`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function getAPIDetailVoucher(id) {
  const url = `${API_URL}/${API_VERSION}/players/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function getAPICategory() {
  const url = `${API_URL}/${API_VERSION}/players/category`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function setAPICheckout(data) {
  const url = `${API_URL}/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
