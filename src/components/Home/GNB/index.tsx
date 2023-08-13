import HStack from '@/components/common/Stack/HStack';
import S from './styles';

function GNB() {
  return (
    <S.GNBWrapper>
      <span>대충 로고</span>
      <input type="text" />
      <HStack gap={16}>
        <span>대충 프로필</span>
        <span>대충 로그아웃</span>
      </HStack>
    </S.GNBWrapper>
  );
}

export default GNB;
