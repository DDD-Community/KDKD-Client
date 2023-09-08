import VStack from '@/components/common/Stack/VStack';
import { Title } from '@/components/common/Typography';
import { UrlInfo } from '../../SearchResult';
import S, { styles } from './styles';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';

interface Props {
  urlInfo: UrlInfo;
}

function LaterUrlCard({ urlInfo }: Props) {
  return (
    <S.Container>
      <S.Image />
      <VStack>
        <Title
          style={{ width: '300px', ...styles.textEllipsis }}
          className="title-16-600"
        >
          {urlInfo.name}
        </Title>
        <Label
          style={{ color: ColorPalette.gray[500], ...styles.textEllipsis }}
        >
          {urlInfo.category.fullName}
        </Label>
      </VStack>
    </S.Container>
  );
}

export default LaterUrlCard;
