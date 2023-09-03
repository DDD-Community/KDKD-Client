import MenuIcon from '@/assets/svg/MenuIcon';
import MenuItem from '../Items/MenuItem';
import { Label } from '@/components/common/Typography';
import FolderAlertIcon from '@/assets/svg/FolderAlertIcon';
import BinIcon from '@/assets/svg/BinIcon';
import VStack from '@/components/common/Stack/VStack';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

function MenuSection({ selectedItem, onItemClick }: Props) {
  return (
    <VStack>
      <MenuItem
        onClick={() => onItemClick('Menu/전체 카테고리')}
        isSelected={selectedItem === 'Menu/전체 카테고리'}
      >
        <MenuIcon />
        <Label className="label-14-400">전체 카테고리</Label>
      </MenuItem>
      <MenuItem
        onClick={() => onItemClick('Menu/미분류 URL')}
        isSelected={selectedItem === 'Menu/미분류 URL'}
      >
        <FolderAlertIcon />
        <Label className="label-14-400">미분류 URL</Label>
      </MenuItem>
      <MenuItem
        onClick={() => onItemClick('Menu/휴지통')}
        isSelected={selectedItem === 'Menu/휴지통'}
      >
        <BinIcon />
        <Label className="label-14-400">휴지통</Label>
      </MenuItem>
    </VStack>
  );
}

export default MenuSection;
