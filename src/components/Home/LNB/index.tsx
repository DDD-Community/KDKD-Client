import S from './styles';
import { Button } from '@/components/ui/button';
import MenuSection from './Section/MenuSection';
import FavoritesSection from './Section/FavoritesSection';
import CategorySection from './Section/CategorySection';
import VStack from '@/components/common/Stack/VStack';
import TagSection from './Section/TagSection';
import { useState } from 'react';

function LNB() {
  const [selectedItem, setSelectedItem] = useState('Menu/전체 카테고리');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <S.LNBWrapper>
      <VStack gap={10}>
        <Button style={{ width: '100%' }}>URL 추가</Button>
        <MenuSection
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
        <FavoritesSection
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
        <CategorySection
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
        <TagSection selectedItem={selectedItem} onItemClick={handleItemClick} />
      </VStack>
    </S.LNBWrapper>
  );
}

export default LNB;
