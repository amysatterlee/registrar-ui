const BASE_URL = 'https://nrc1bmp5kd.execute-api.us-east-1.amazonaws.com/default';

export const fetchAccount = (id) => {
  const url = `${BASE_URL}/public/${id}`;
  const params = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  };
  return fetch(url, params);
}