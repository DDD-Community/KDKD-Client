import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

export const fetcher = async (url: string, params = '') => {
  const [accessTokenCookie] = await chrome.cookies.getAll({
    name: 'accessToken',
  });

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

export const requester = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: T,
) => {
  const [accessTokenCookie] = await chrome.cookies.getAll({
    name: 'accessToken',
  });

  return api({
    url,
    method,
    headers: {
      ...(accessTokenCookie.value.length > 0 && {
        Authorization: `Bearer ${accessTokenCookie.value}`,
      }),
    },
    ...(body && { data: body }),
  });
};
