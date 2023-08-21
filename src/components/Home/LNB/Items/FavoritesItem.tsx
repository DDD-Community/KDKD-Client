import { Label } from '@/components/common/Typography';
import { PropsWithChildren, useState } from 'react';
import MoreIcon from '@/assets/svg/MoreIcon';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import FavoritesPopover from '../Popover/FavoritesPopover';
import { styles, focusedStyle, LeftSection, RightSection } from './style';

interface Props {
  count?: number;
  isFocused?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function FavoritesItem({
  count = 0,
  isFocused = false,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      css={{ ...styles.container, ...(isFocused ? focusedStyle : {}) }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LeftSection>{children}</LeftSection>
      <RightSection>
        {isHovered ? (
          <Popover>
            <PopoverTrigger asChild>
              <div>
                <MoreIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <FavoritesPopover id={1} />
            </PopoverContent>
          </Popover>
        ) : (
          <Label className="label-12-400">{count}</Label>
        )}
      </RightSection>
    </div>
  );
}

export default FavoritesItem;
