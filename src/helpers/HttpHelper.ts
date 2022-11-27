import axios from 'axios';

export const BaseURL = 'https://newsapi.org/v2';

export const protectedHttp = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: '24cd47450baf447fa340bc10cee65482',
  },
});
