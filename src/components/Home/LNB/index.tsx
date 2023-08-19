import S from './styles';
import { Button } from '@/components/ui/button';
import MenuSection from './MenuSection';

function LNB() {
  return (
    <S.LNBWrapper>
      <S.LNBMain>
        <Button style={{ width: '100%' }}>URL 추가</Button>
        <MenuSection />
      </S.LNBMain>
    </S.LNBWrapper>
  );
}

export default LNB;
