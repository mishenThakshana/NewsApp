import axios from 'axios';

export const BaseURL = 'https://newsapi.org/v2';

export const protectedHttp = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: '2e9c2023131d4814936e54722175bcea',
  },
});
