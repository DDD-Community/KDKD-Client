import GoogleLogin from './GoogleLogin';
import Save from './Save/save';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function Main() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return <>{isLoggedIn ? <Save /> : <GoogleLogin />}</>;
}

export default Main;
