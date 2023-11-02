const BASE_URL = "https://fe-task-api.mainstack.io";

export const fetchUserData = async () => {
  const response = await fetch(`${BASE_URL}/user`);
  const data = await response.json();
  console.log(data)
  return data;
};

export const fetchWalletData = async () => {
  const response = await fetch(`${BASE_URL}/wallet`);
  const data = await response.json();
  console.log(data)
  return data;
};

export const fetchTransactionData = async () => {
  const response = await fetch(`${BASE_URL}/transactions`);
  const data = await response.json();
  console.log(data)
  return data;
};

