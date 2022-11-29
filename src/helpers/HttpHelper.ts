import axios from 'axios';

export const BaseURL = 'https://newsapi.org/v2';

export const protectedHttp = axios.create({
  baseURL: BaseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: 'cc8f17da00944e818226e03aefd8414d',
  },
});
