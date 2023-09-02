import axios from 'axios';
import useSWRMutation from 'swr/mutation';

export const api = axios.create({
  baseURL: import.meta.env.VITE_MOCK_SERVER_BASE_URL,
  // baseURL: import.meta.env.VITE_DEV_SERVER_BASE_URL,
});

/** TODO: 토큰 받으면 넣어주어야 함 */
api.defaults.headers.common = {
  Authorization: `Bearer `,
};

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const fetcherWithParams = ([url, params]: string[]) =>
  api.get(`${url}${params}`).then((res) => res.data);

export async function sendRequest<T>(url: string, { arg }: { arg: T }) {
  return await api({
    method: 'post',
    url,
    data: arg,
  });
}
