import callAPI from "../config/api";

const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getAPIMemberOverview() {
  const url = `${API_URL}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getAPIMemberTransaction(status) {
  let params = "";
  if (status === "all") {
    params = "";
  } else {
    params = `=${status}`;
  }
  const url = `${API_URL}/${API_VERSION}/players/transaction?status${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getAPIMemberTransactionDetail(token, trxID) {
  const url = `${API_URL}/${API_VERSION}/players/transaction/${trxID}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

export async function updateProfile(data) {
  const url = `${API_URL}/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: "PUT",
    data,
    token: true,
  });
}
