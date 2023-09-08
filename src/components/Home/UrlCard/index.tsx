import HStack from '@/components/common/Stack/HStack';
import { UrlInfo } from '../SearchResult';
import S, { styles } from './styles';
import VStack from '@/components/common/Stack/VStack';
import { Label } from '@/components/common/Typography';
import MainContent from './MainContent';
import { useEffect, useState } from 'react';
import BinIcon from '@/assets/svg/BinIcon';
import ShareIcon from '@/assets/svg/ShareIcon';
import MemoIcon from '@/assets/svg/MemoIcon';
import { useSearchParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';

interface Props {
  urlInfo: UrlInfo;
}

function UrlCard({ urlInfo }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [urlKeyword, setUrlKeyword] = useState('');

  useEffect(() => {
    setUrlKeyword(searchParams.get('urlKeyword') ?? '');
  }, [searchParams]);

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
        <S.Image
          src={
            urlInfo.thumbnail === ''
              ? 'src/assets/images/defaultUrlOGImage.png'
              : urlInfo.thumbnail
          }
        />
        <VStack gap={8}>
          <MainContent urlInfo={urlInfo} keyword={urlKeyword} />
          <S.Divider />
          <VStack gap={4}>
            <S.DescriptionSection>
              <MemoIcon />
              {searchParams.get('urlKeyword') ? (
                <Label>
                  <Highlighter
                    highlightStyle={{ ...styles.highlightStyle }}
                    searchWords={[urlKeyword]}
                    textToHighlight={urlInfo.memo}
                  />
                </Label>
              ) : (
                <Label>{urlInfo.memo}</Label>
              )}
            </S.DescriptionSection>
          </VStack>
        </VStack>
      </HStack>
    </S.Container>
  );
}

export default UrlCard;
