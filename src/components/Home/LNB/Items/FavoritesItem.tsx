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
import { NodeModel } from '@minoru/react-dnd-treeview';

interface Props {
  id: number;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  onDeleteFavorite: (id: NodeModel['id']) => void;
}

function FavoritesItem({
  id,
  isSelected = false,
  onClick,
  children,
  onDeleteFavorite,
}: PropsWithChildren<Props>) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
            <PopoverTrigger onClick={(e) => e.stopPropagation()}>
              <div>
                <MoreIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <FavoritesPopover
                onDeleteFavorites={() => onDeleteFavorite(id)}
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
