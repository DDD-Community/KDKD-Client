import FavoritesItem from '../Items/FavoritesItem';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import StarIcon from '@/assets/svg/StarIcon';
import VStack from '@/components/common/Stack/VStack';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

function FavoritesSection({ selectedItem, onItemClick }: Props) {
  return (
    <VStack gap={8}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        즐겨찾기
      </Label>
      <VStack>
        <FavoritesItem
          onClick={() => onItemClick(`Favorites/${1}`)}
          isSelected={selectedItem === `Favorites/${1}`}
        >
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="label-14-400">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem
          onClick={() => onItemClick(`Favorites/${2}`)}
          isSelected={selectedItem === `Favorites/${2}`}
        >
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="label-14-400">전체 카테고리</Label>
        </FavoritesItem>
      </VStack>
    </VStack>
  );
}

export default FavoritesSection;
