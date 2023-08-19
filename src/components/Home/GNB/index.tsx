import HStack from '@/components/common/Stack/HStack';
import S from './styles';
import SearchInput from '@/components/common/SearchInput';
import { useState } from 'react';

function GNB() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <S.GNBWrapper>
      <span>대충 로고</span>
      <S.InputWrapper>
        <SearchInput
          style={{
            ...S.SearchInputStyle,
            width: isFocus ? '1175px' : '283px',
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </S.InputWrapper>
      <HStack gap={16}>
        <span>대충 프로필</span>
        <span>대충 로그아웃</span>
      </HStack>
    </S.GNBWrapper>
  );
}

export default GNB;
