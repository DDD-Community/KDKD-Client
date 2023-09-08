import HStack from '@/components/common/Stack/HStack';
import * as S from './styles';
import SearchInput from '@/components/common/SearchInput';
import { useContext, useState } from 'react';
import RecentlySearch from '@/components/Home/GNB/RecentlySearch';
import { LayoutContext } from '@/Layout/Controller';
import { Button } from '@/components/ui/button';
import PersonIcon from '@/assets/svg/Person';
import Logo from '@/assets/svg/Logo';

function GNB() {
  const [isFocus, setIsFocus] = useState(false);

  const { handleSearchClose, handleSearchOpen } = useContext(LayoutContext);

  function handleFocus() {
    setIsFocus(true);
    handleSearchOpen();
  }

  function handleBlur() {
    setIsFocus(false);
    handleSearchClose();
  }

  return (
    <>
      <S.GNBWrapper>
        <Logo />
        <div
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
          style={{
            display: 'flex',
            flex: 1,
            marginLeft: '290px',
            width: isFocus ? '1060px' : '283px',
          }}
        >
          <S.InputWrapper>
            <SearchInput
              width={isFocus ? '1060px' : '283px'}
              style={S.SearchInputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </S.InputWrapper>
          {isFocus && <RecentlySearch onBlur={handleBlur} />}
        </div>
        <HStack gap={16} style={{ width: 'auto' }}>
          <Button size="sm" variant="ghost">
            <PersonIcon />
          </Button>
          <Button size="sm" variant="ghost">
            로그아웃
          </Button>
        </HStack>
      </S.GNBWrapper>
    </>
  );
}

export default GNB;
