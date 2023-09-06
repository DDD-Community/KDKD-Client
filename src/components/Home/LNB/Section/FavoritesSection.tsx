import FavoritesItem from '../Items/FavoritesItem';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import StarIcon from '@/assets/svg/StarIcon';
import VStack from '@/components/common/Stack/VStack';
import useSWR from 'swr';
import { fetcher } from '@/api';
import { useSearchParams } from 'react-router-dom';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

export interface FavoritesItemType {
  id: number;
  name: string;
}

function FavoritesSection({ selectedItem, onItemClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: favorites } = useSWR<FavoritesItemType[]>(
    '/categories/bookmark',
    fetcher,
  );

  const handleSelect = (id: number) => {
    searchParams.set('categoryId', id.toString());
    setSearchParams(searchParams);
  };

  return (
    <VStack gap={8} style={{ width: '100%' }}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        즐겨찾기
      </Label>
      <VStack style={{ width: '100%' }}>
        {favorites &&
          favorites.map((item) => (
            <FavoritesItem
              id={item.id}
              onClick={() => {
                onItemClick(`Favorites/${item.id}`);
                handleSelect(item.id);
              }}
              isSelected={selectedItem === `Favorites/${item.id}`}
              key={item.id}
            >
              <div style={{ width: '16px' }} />
              <StarIcon />
              <Label className="label-14-400">{item.name}</Label>
            </FavoritesItem>
          ))}
      </VStack>
    </VStack>
  );
}

export default FavoritesSection;
