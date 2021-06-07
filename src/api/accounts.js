const BASE_URL = 'https://nrc1bmp5kd.execute-api.us-east-1.amazonaws.com/default';
const API_KEY = 's8g5HOn0J96hg04h5eYunaLBetyh8fZp6iFyzRiQ';

export const fetchAccount = (id) => {
  const url = `${BASE_URL}/public/${id}`;
  const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      }
  };
  return fetch(url, params);
}