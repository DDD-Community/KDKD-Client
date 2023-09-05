import { api } from '@/api';
import { useCookies } from 'react-cookie';
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '@/redux/slices/authSlice';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  role: string;
}

export default function useAuth() {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies([
    'accessToken',
    'refreshToken',
  ]);

  const login = async (googleIdToken: string) => {
    if (!googleIdToken) {
      throw new Error('Login is Failed by Google');
    }

    try {
      const res: AxiosResponse<LoginResponse> = await api.post('auth/login', {
        loginId: 'choo000407',
        password: '1234',
      });
      setCookie('accessToken', res.data.accessToken);
      setCookie('refreshToken', res.data.refreshToken);
      dispatch(setIsLoggedIn(true));
    } catch (error) {
      throw new Error('Login is Failed in server');
    }
  };

  const logout = () => {
    removeCookie('accessToken');
    removeCookie('accessToken');
    dispatch(setIsLoggedIn(false));
  };

  const extensionLogin = async (googleIdToken: string) => {
    if (!googleIdToken) {
      throw new Error('Login is Failed by Google');
    }

    try {
      const res: AxiosResponse<LoginResponse> = await api.post('auth/login', {
        loginId: 'choo000407',
        password: '1234',
      });

      chrome.cookies.set({
        name: 'accessToken',
        url: import.meta.env.VITE_DEV_CLIENT_URL,
        value: res.data.accessToken,
      });
      chrome.cookies.set({
        name: 'refreshToken',
        url: import.meta.env.VITE_DEV_CLIENT_URL,
        value: res.data.refreshToken,
      });
      dispatch(setIsLoggedIn(true));
    } catch (error) {
      throw new Error('Login is Failed in server');
    }
  };

  const extensionLogout = () => {
    chrome.cookies.remove({
      name: 'accessToken',
      url: import.meta.env.VITE_DEV_CLIENT_URL,
    });
    chrome.cookies.remove({
      name: 'refreshToken',
      url: import.meta.env.VITE_DEV_CLIENT_URL,
    });
    dispatch(setIsLoggedIn(false));
  };

  return {
    login,
    logout,
    extensionLogin,
    extensionLogout,
  };
}
