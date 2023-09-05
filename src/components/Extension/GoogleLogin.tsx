import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';

function GoogleLogin() {
  const { extensionLogin } = useAuth();

  function handleLogin() {
    extensionLogin('example Google Token');

    /** 추후 구글 로그인 구현 */
    // chrome.identity.getAuthToken({ interactive: true }, (googleIdToken) => {
    //   if (!googleIdToken) {
    //     throw new Error('Login is Failed at Google');
    //   }
    //   extensionLogin(googleIdToken);
    // });
  }

  return (
    <div>
      <Button id="login" size="lg" onClick={handleLogin}>
        Google Login
      </Button>
    </div>
  );
}

export default GoogleLogin;
