import GNB from '@/components/Home/GNB';
import LNB from '@/components/Home/LNB';
import Main from '@/components/Home/Main';
import { ColorPalette } from '@/styles/ColorPalette';
import { PropsWithChildren } from 'react';
import LayoutController, { LayoutContext } from '@/Layout/Controller';
import { css } from '@emotion/react';

function Layout({ children }: PropsWithChildren) {
  const { isSearchOpen, handleSearchOpen, handleSearchClose } =
    LayoutController();

  return (
    <LayoutContext.Provider
      value={{
        handleSearchClose,
        handleSearchOpen,
      }}
    >
      <div>
        <GNB />
        <main
          style={{
            display: 'flex',
            position: 'relative',
          }}
        >
          {isSearchOpen && (
            <div
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 10;
              `}
            />
          )}
          <LNB />
          <Main>{children}</Main>
        </main>
      </div>
    </LayoutContext.Provider>
  );
}

export default Layout;
