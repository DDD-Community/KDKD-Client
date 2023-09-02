import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const fetcherWithToken = async (url: string) => {
  const [accessTokenCookie] = await chrome.cookies.getAll({
    name: 'accessToken',
  });

  return api
    .get(url, {
      headers: {
        ...(accessTokenCookie.value.length > 0 && {
          Authorization: `Bearer ${accessTokenCookie.value}`,
        }),
      },
    })
    .then((res) => res.data);
};

export const fetcherWithParams = async ([url, params]: string[]) => {
  const [accessTokenCookie] = await chrome.cookies.getAll({
    name: 'accessToken',
  });

  return api
    .get(`${url}${params}`, {
      headers: {
        ...(accessTokenCookie.value.length > 0 && {
          Authorization: `Bearer ${accessTokenCookie.value}`,
        }),
      },
    })
    .then((res) => res.data);
};

export const sendRequest = <T>(url: string, { arg }: { arg: T }) =>
  api.post(url, arg).then((res) => res.data);
