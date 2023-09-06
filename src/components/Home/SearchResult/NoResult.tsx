import VStack from '@/components/common/Stack/VStack';
import { Body } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import NoResultImage from '@/assets/images/NoResult.png';

function NoResult() {
  return (
    <VStack
      justifyContent={'center'}
      alignItems={'center'}
      style={{ width: '100%', height: '100%' }}
      gap={40}
    >
      <VStack alignItems={'center'}>
        <Body className="body-16-400" style={{ color: ColorPalette.gray[500] }}>
          아직 저장된 URL이 없어요 :(
        </Body>
        <Body className="body-16-400" style={{ color: ColorPalette.gray[500] }}>
          왼쪽 상단 버튼 또는 구글 확장프로그램으로 URL을 추가해보세요!
        </Body>
      </VStack>
      <img src={NoResultImage} alt="No Result Image" />
    </VStack>
  );
}

export default NoResult;
