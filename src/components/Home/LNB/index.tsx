import S from './styles';
import { Button } from '@/components/ui/button';
import MenuSection from './Section/MenuSection';
import FavoritesSection from './Section/FavoritesSection';

function LNB() {
  return (
    <S.LNBWrapper>
      <S.LNBMain>
        <Button style={{ width: '100%' }}>URL 추가</Button>
        <MenuSection />
        <FavoritesSection />
      </S.LNBMain>
    </S.LNBWrapper>
  );
}

export default LNB;
