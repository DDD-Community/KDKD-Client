import axios from 'axios';
import { Cookies } from 'react-cookie';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

export const fetcher = async (url: string, params = '') => {
  const cookie = new Cookies();
  const accessToken = cookie.get('accessToken');

  return api
    .get(url + params, {
      headers: {
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
      },
    })
    .then((res) => res.data);
};

export const sendRequest = <T>(url: string, { arg }: { arg: T }) =>
  api.post(url, arg).then((res) => res.data);
