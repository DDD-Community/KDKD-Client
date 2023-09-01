import GNB from '@/components/Home/GNB';
import LNB from '@/components/Home/LNB';
import Main from '@/components/Home/Main';
import { ColorPalette } from '@/styles/ColorPalette';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <GNB />
      <main
        style={{ display: 'flex', backgroundColor: ColorPalette.gray['000'] }}
      >
        <LNB />
        <Main>{children}</Main>
      </main>
    </div>
  );
}

export default Layout;
