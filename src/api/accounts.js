import { BASE_URL, API_KEY } from '../config/config';

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