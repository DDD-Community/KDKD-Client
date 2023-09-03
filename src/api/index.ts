import axios from 'axios';
import { useCookies } from 'react-cookie';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

export const fetcher = (url: string, params = '') => {
  const [cookies] = useCookies(['accessToken']);

  return api
    .get(url + params, {
      headers: {
        ...(cookies.accessToken && {
          Authorization: `Bearer ${cookies.accessToken}`,
        }),
      },
    })
    .then((res) => res.data);
};

export const sendRequest = <T>(url: string, { arg }: { arg: T }) =>
  api.post(url, arg).then((res) => res.data);
