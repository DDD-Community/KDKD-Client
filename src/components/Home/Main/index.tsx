import { PropsWithChildren } from 'react';
import S from './styles';

function Main({ children }: PropsWithChildren) {
  return <S.Main>{children}</S.Main>;
}

export default Main;
