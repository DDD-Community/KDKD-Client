import MenuIcon from '@/assets/svg/MenuIcon';
import MenuItem from '../Items/MenuItem';
import { Label } from '@/components/common/Typography';
import FolderAlertIcon from '@/assets/svg/FolderAlertIcon';
import BinIcon from '@/assets/svg/BinIcon';
import VStack from '@/components/common/Stack/VStack';

function MenuSection() {
  return (
    <VStack>
      <MenuItem>
        <MenuIcon />
        <Label className="label-14-400">전체 카테고리</Label>
      </MenuItem>
      <MenuItem>
        <FolderAlertIcon />
        <Label className="label-14-400">미분류 URL</Label>
      </MenuItem>
      <MenuItem>
        <BinIcon />
        <Label className="label-14-400">휴지통</Label>
      </MenuItem>
    </VStack>
  );
}

export default MenuSection;
