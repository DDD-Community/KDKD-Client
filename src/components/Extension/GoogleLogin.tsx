import { Button } from '@/components/ui/button';

function GoogleLogin() {
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
          console.log(data);
        });
    });
  }

  return (
    <Button id="login" size="lg" onClick={handleLogin}>
      Google Login
    </Button>
  );
}

export default GoogleLogin;
