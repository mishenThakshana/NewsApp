import axios from 'axios';

export const BaseURL = 'https://newsapi.org/v2';

export const protectedHttp = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: 'ece3ae6618a34ccfb5e7ef280ddd55d2',
  },
});
