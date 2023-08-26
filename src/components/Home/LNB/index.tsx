import S from './styles';
import { Button } from '@/components/ui/button';
import MenuSection from './Section/MenuSection';
import FavoritesSection from './Section/FavoritesSection';
import CategorySection from './Section/CategorySection';
import VStack from '@/components/common/Stack/VStack';
import TagSection from './Section/TagSection';

function LNB() {
  return (
    <S.LNBWrapper>
      <VStack gap={10}>
        <Button style={{ width: '100%' }}>URL 추가</Button>
        <MenuSection />
        <FavoritesSection />
        <CategorySection />
        <TagSection />
      </VStack>
    </S.LNBWrapper>
  );
}

export default LNB;
