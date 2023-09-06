import { Label } from '@/components/common/Typography';
import { PropsWithChildren, useState } from 'react';
import MoreIcon from '@/assets/svg/MoreIcon';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import FavoritesPopover from '../Popover/FavoritesPopover';
import S, { styles, selectedStyle } from './style';
import { useSWRConfig } from 'swr';
import { api, requester } from '@/api';
import { Cookies } from 'react-cookie';
import { AxiosResponse } from 'axios';
import { FavoritesItemType } from '../Section/FavoritesSection';

interface Props {
  id: number;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function FavoritesItem({
  id,
  isSelected = false,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  const { mutate: globalMutate } = useSWRConfig();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const onDeleteFavorites = async (id: number) => {
    await requester(`/categories/${id}/bookmark`, 'PATCH', {
      bookmark: false,
    });

    const { data }: AxiosResponse<FavoritesItemType[]> = await requester(
      '/categories/bookmark',
      'GET',
    );

    globalMutate('/categories/bookmark', data);
  };

  return (
    <div
      css={{ ...styles.container, ...(isSelected ? selectedStyle : {}) }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.LeftSection>{children}</S.LeftSection>
      <S.RightSection>
        {isHovered ? (
          <Popover>
            <PopoverTrigger asChild>
              <div>
                <MoreIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <FavoritesPopover
                onDeleteFavorites={() => onDeleteFavorites(id)}
              />
            </PopoverContent>
          </Popover>
        ) : (
          // <Label className="label-12-400">{count}</Label>
          <div />
        )}
      </S.RightSection>
    </div>
  );
}

export default FavoritesItem;
