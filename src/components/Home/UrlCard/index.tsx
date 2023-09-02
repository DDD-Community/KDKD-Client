import HStack from '@/components/common/Stack/HStack';
import { UrlInfo } from '../SearchResult';
import S from './styles';
import VStack from '@/components/common/Stack/VStack';
import { Label, Title } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import MainContent from './MainContent';
import { useState } from 'react';
import BinIcon from '@/assets/svg/BinIcon';
import ShareIcon from '@/assets/svg/ShareIcon';
import MemoIcon from '@/assets/svg/MemoIcon';

interface Props {
  urlInfo: UrlInfo;
}

function UrlCard({ urlInfo }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HStack gap={16}>
        <S.Image />
        <VStack gap={8}>
          <MainContent urlInfo={urlInfo} />
          <S.Divider />
          <VStack gap={4}>
            <S.DescriptionSection>
              <MemoIcon />
              <Label>{urlInfo.memo}</Label>
            </S.DescriptionSection>
          </VStack>
        </VStack>
      </HStack>
      {isHovered && (
        <S.HoveredIconContainer>
          <S.HoveredIcon>
            <ShareIcon />
          </S.HoveredIcon>
          <S.HoveredIcon>
            <BinIcon />
          </S.HoveredIcon>
        </S.HoveredIconContainer>
      )}
    </S.Container>
  );
}

export default UrlCard;
