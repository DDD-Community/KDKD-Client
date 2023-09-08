import HStack from '@/components/common/Stack/HStack';
import VStack from '@/components/common/Stack/VStack';
import { Label, Title } from '@/components/common/Typography';
import { UrlInfo } from '../SearchResult';
import { ColorPalette } from '@/styles/ColorPalette';
import S, { styles } from './styles';
import Highlighter from 'react-highlight-words';

interface Props {
  urlInfo: UrlInfo;
  keyword: string | null;
}

function MainContent({ urlInfo, keyword }: Props) {
  return (
    <VStack gap={8}>
      <VStack>
        {keyword ? (
          <Title>
            <Highlighter
              highlightStyle={{ ...styles.highlightStyle }}
              searchWords={[keyword]}
              textToHighlight={urlInfo.name}
            />
          </Title>
        ) : (
          <Title>{urlInfo.name}</Title>
        )}
        <HStack gap={8} alignItems="center">
          <Label style={{ color: ColorPalette.gray[400] }}>
            {urlInfo.category.fullName} |{' '}
            <S.Link href={urlInfo.urlAddress} target="blank">
              {urlInfo.urlAddress}
            </S.Link>
          </Label>
        </HStack>
      </VStack>
      <HStack gap={4}>
        {urlInfo?.tag &&
          urlInfo.tag.map((tag, idx) => (
            <S.Tag key={idx}>
              <span style={{ color: ColorPalette.blue[200] }}># </span>
              {keyword ? (
                <Label className="label-14-400">
                  <Highlighter
                    highlightStyle={{ ...styles.highlightStyle }}
                    searchWords={[keyword]}
                    textToHighlight={tag}
                  />
                </Label>
              ) : (
                <Label className="label-14-400">{tag}</Label>
              )}
            </S.Tag>
          ))}
      </HStack>
    </VStack>
  );
}

export default MainContent;
