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

export const requester = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: T,
) => {
  const cookie = new Cookies();
  const accessToken = cookie.get('accessToken');

  return api({
    url,
    method,
    headers: {
      ...(accessToken && {
        Authorization: `Bearer ${accessToken}`,
      }),
    },
    ...(body && { data: body }),
  });
};

export const sendRequest = <T>(url: string, { arg }: { arg: T }) =>
  api.post(url, arg).then((res) => res.data);
