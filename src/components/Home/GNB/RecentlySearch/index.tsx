import S from './styles';
import VStack from '@/components/common/Stack/VStack';
import HStack from '@/components/common/Stack/HStack';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import { useSearchParams } from 'react-router-dom';

interface Props {
  onBlur?: () => void;
}

function RecentlySearch({ onBlur }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickKeyword = (keyword: string) => {
    setSearchParams(`keywordRange=tag&urlKeyword=${keyword}`);
    onBlur?.();
  };

  const handleClickTag = (tagName: string) => {
    setSearchParams(`keywordRange=tag&urlKeyword=${tagName}`);
    onBlur?.();
  };

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
          <S.Keyword onClick={() => handleClickKeyword('유튜브')}>
            <Label className="label-14-400">유튜브</Label>
          </S.Keyword>
          <S.Tag onClick={() => handleClickTag('경이로운소문')}>
            <HStack gap={2}>
              <S.TagHash>#</S.TagHash>
              <Label className="label-14-400">경이로운소문</Label>
            </HStack>
          </S.Tag>
          <S.Tag>
            <HStack gap={2}>
              <S.TagHash>#</S.TagHash>
              <Label className="label-14-400">태그 2</Label>
            </HStack>
          </S.Tag>
          <S.Tag>
            <HStack gap={2}>
              <S.TagHash>#</S.TagHash>
              <Label className="label-14-400">태그 3</Label>
            </HStack>
          </S.Tag>
        </HStack>
      </VStack>
    </S.RecentlySearchWrapper>
  );
}

export default RecentlySearch;
