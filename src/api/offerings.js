import { BASE_URL, API_KEY } from '../config/config';
import { authHeaders } from '../helpers/helpers';

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