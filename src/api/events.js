const BASE_URL = '';

export const fetchEvents = (id, token) => {
    const url = `${BASE_URL}/accounts/${id}/events`;
    const params = {
        method: 'GET',
        headers: authHeaders(token)
    };
    return fetch(url, params);
}

export const createEvent = (id, event, token) => {
  /* create a new event */
  const url = `${BASE_URL}/accounts/${id}/events`;
  const payload = {
    method: 'POST',
    hheaders: authHeaders(token),
    body: JSON.stringify(event)
  };
  return fetch(url, payload);
}

export const fetchEvent = (accountId, eventId, token) => {
    const url = `${BASE_URL}/accounts/${accountId}/events/${eventId}`;
    const params = {
        method: 'GET',
        headers: authHeaders(token)
    };
    return fetch(url, params);
}

export const updateEvent = (accountId, eventId, event, token) => {
    const url = `${BASE_URL}/accounts/${accountId}/events/${eventId}`;
    const payload = {
      method: 'PUT',
      hheaders: authHeaders(token),
      body: JSON.stringify(event)
    };
    return fetch(url, payload);
}