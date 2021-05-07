const BASE_URL = '';

export const login = (params) => {
  const payload = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  };
  return fetch(`${BASE_URL}/login`, payload);
}

export const createAccount = (params) => {
  /* create a new account - TBD send confirmation email, have confirmation token confirmed */
  const payload = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  };
  return fetch(`${BASE_URL}/accounts`, payload);
}

export const fetchAccount = (id, token) => {
  const url = `${BASE_URL}/accounts/${id}`;
  const params = {
      method: 'GET',
      headers: authHeaders(token)
  };
  return fetch(url, params);
}