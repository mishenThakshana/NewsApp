import axios from 'axios';

export const BaseURL = 'https://newsapi.org/v2';

export const protectedHttp = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: '73c93b6e8ab646c5b80edb1111ed16b2',
  },
});
