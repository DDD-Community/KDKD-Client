import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import type { RootState } from '@/redux/store';
import { userInfoType } from '@/redux/slices/loginSlice';
import { login } from '@/redux/slices/loginSlice';

function GoogleLogin() {
  const userInfo = useSelector((state: RootState) => state.login.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('newuserinfo: ', userInfo);
  }, [userInfo]);

  function handleLogin() {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      const init = {
        method: 'GET',
        async: true,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        contentType: 'json',
      };
      fetch(
        'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos',
        init,
      )
        .then((response) => response.json())
        .then((data) => {
          const [nameInfo] = data.names;
          const [photoInfo] = data.photos;
          const [emailInfo] = data.emailAddresses;

          const newUserInfo: userInfoType = {
            name: nameInfo.displayName,
            photoUrl: photoInfo.url,
            email: emailInfo.value,
          };

          dispatch(login(newUserInfo));
        });
    });
  }

  return (
    <div>
      <Button id="login" size="lg" onClick={handleLogin}>
        Google Login
      </Button>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Photo URL: {userInfo.photoUrl}</p>
    </div>
  );
}

export default GoogleLogin;
