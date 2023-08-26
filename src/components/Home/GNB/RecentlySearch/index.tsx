import S from './styles';
import VStack from '@/components/common/Stack/VStack';
import HStack from '@/components/common/Stack/HStack';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';

function RecentlySearch() {
  // TODO: 검색 API 연동 필요

  return (
    <S.RecentlySearchWrapper>
      <VStack gap={8}>
        <Label
          className="label-14-600"
          style={{ color: ColorPalette.gray['600'] }}
        >
          최근
        </Label>
        <HStack alignItems="center" gap={16}>
          {/* TODO: 검색 대상이 제목일 경우 검색어 컴포넌트, 태그일 경우 태그 컴포넌트 구현 필요 */}
          <span>대충 검색어</span>
          <span>대충 검색어</span>
          <span>대충 검색어</span>
        </HStack>
      </VStack>
    </S.RecentlySearchWrapper>
  );
}

export default RecentlySearch;
