'use strict';

function playWithResponsePromise(response) {
  return new Promise(function (resolve, reject) {
    if (response.status < 400) {
      response.json().then(resolve);
    } else {
      response.json().then(reject);
    }
  });
}

export function get(url, token) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...token && {'Authorization': token}
    }
  }).then(playWithResponsePromise);
}

export function post(url, data, token) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...token && {'Authorization': token}
    },
    body: JSON.stringify(data)
  }).then(playWithResponsePromise);
}

export function update(url, data, token) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...token && {'Authorization': token}
    },
    body: JSON.stringify(data)
  }).then(playWithResponsePromise);
}

export function patch(url, data, token) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...token && {'Authorization': token}
    },
    body: JSON.stringify(data)
  }).then(playWithResponsePromise);
}

export function remove(url, data, token) {
  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...token && {'Authorization': token}
    }
  }).then(playWithResponsePromise);
}

export function postMultipart(url, data, token) {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      ...token && {'Authorization': token}
    }
  }).then(playWithResponsePromise);
}