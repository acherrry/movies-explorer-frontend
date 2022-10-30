import { MAIN_API, HEADERS } from "./config";

export const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : res.json().then((err)=> Promise.reject(err));
}

export const register = ({email, password, name}) => {
  return fetch(`${MAIN_API}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password,
      name,
    })
  })
  .then(checkResponse);
};

export const login = ({email, password}) => {
  return fetch(`${MAIN_API}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password,
    })
  })
  .then(checkResponse);
};

export const loginOut = (res) => {
  return fetch(`${MAIN_API}/signout`, {
    credentials: 'include',
    method: 'DELETE',
    headers: HEADERS
  })
  .then(res)
  .catch(err => console.log(err))
};

export function getUserInfo() {
  return fetch(`${MAIN_API}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: HEADERS
  })
  .then(checkResponse);
};

export function editProfile({ name, email }) {
  return fetch(`${MAIN_API}/users/me`, {
    credentials: 'include',
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({
      name,
      email,
    })
  })
  .then(checkResponse);
};