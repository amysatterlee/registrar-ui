const BASE_URL = 'https://nrc1bmp5kd.execute-api.us-east-1.amazonaws.com/default';
import { authHeaders } from '../helpers/helpers';
const API_KEY = 's8g5HOn0J96hg04h5eYunaLBetyh8fZp6iFyzRiQ';

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
    headers: authHeaders(token),
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
      headers: authHeaders(token),
      body: JSON.stringify(event)
    };
    return fetch(url, payload);
}

export const deleteEvent = (accountId, eventId, token) => {
    const url = `${BASE_URL}/accounts/${accountId}/events/${eventId}`;
    const payload = {
        method: 'DELETE',
        headers: authHeaders(token)
    }
    return fetch(url, payload);
}

export const fetchPublicOfferings = (accountId, type) => {
    const url = `${BASE_URL}/public/${accountId}/offerings?offeringType=${type}`;
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
    };
    return fetch(url, params);
}

export const fetchPublicOffering = (accountId, offeringId) => {
    const url = `${BASE_URL}/public/${accountId}/offerings/${offeringId}`
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
    };
    return fetch(url, params);
}

export const offeringSubmission = (accountId, offeringId, formData) => {
    const url = `${BASE_URL}/public/${accountId}/offerings/${offeringId}`
    const params = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        }
    };
    return fetch(url, params);
}