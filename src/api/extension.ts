import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

export const fetcher = async (url: string, params = '') => {
  const [accessTokenCookie] = await chrome.cookies.getAll({
    name: 'accessToken',
  });

  console.log('fetcher', url, params);

  return api
    .get(url + params, {
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
