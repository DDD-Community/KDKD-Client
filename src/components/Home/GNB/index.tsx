import HStack from '@/components/common/Stack/HStack';
import * as S from './styles';
import SearchInput from '@/components/common/SearchInput';
import { useState } from 'react';
import RecentlySearch from '@/components/Home/GNB/RecentlySearch';

function GNB() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <S.GNBWrapper>
        <span>대충 로고</span>
        <S.InputWrapper isFocus={isFocus}>
          <SearchInput
            width={isFocus ? '1060px' : '283px'}
            style={S.SearchInputStyle}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </S.InputWrapper>
        <HStack gap={16} style={{ width: 'auto' }}>
          <span>대충 프로필</span>
          <span>대충 로그아웃</span>
        </HStack>
      </S.GNBWrapper>
      {isFocus && <RecentlySearch />}
    </>
  );
}

export default GNB;
