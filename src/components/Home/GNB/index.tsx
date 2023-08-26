import HStack from '@/components/common/Stack/HStack';
import * as S from './styles';
import SearchInput from '@/components/common/SearchInput';
import { useContext, useState } from 'react';
import RecentlySearch from '@/components/Home/GNB/RecentlySearch';
import { LayoutContext } from '@/Layout/Controller';

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
        <span>대충 로고</span>
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
            />
          </S.InputWrapper>
          {isFocus && <RecentlySearch />}
        </div>
        <HStack gap={16} style={{ width: 'auto' }}>
          <span>대충 프로필</span>
          <span>대충 로그아웃</span>
        </HStack>
      </S.GNBWrapper>
    </>
  );
}

export default GNB;
