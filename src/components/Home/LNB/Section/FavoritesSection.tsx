import FavoritesItem from '../Items/FavoritesItem';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import { ColorPalette } from '@/styles/ColorPalette';
import StarIcon from '@/assets/svg/StarIcon';
import useSWR from 'swr';
import { fetcher, requester } from '@/api';
import { useSearchParams } from 'react-router-dom';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { AxiosResponse } from 'axios';

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

  const { data: favorites, mutate: mutateFavorites } = useSWR<
    FavoritesItemType[]
  >('/categories/bookmark', fetcher);

  const handleSelect = (id: number) => {
    setSearchParams(`categoryId=${id.toString()}`);
  };

  const handleDeleteFavorite = async (id: NodeModel['id']) => {
    await requester(`/categories/${id}/bookmark`, 'PATCH', {
      bookmark: false,
    });
    mutateFavorites((favorites) => favorites);
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
              onDeleteFavorite={handleDeleteFavorite}
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
