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
        <Label className="title-14-600">전체 카테고리</Label>
      </MenuItem>
      <MenuItem>
        <FolderAlertIcon />
        <Label className="title-14-600">미분류 URL</Label>
      </MenuItem>
      <MenuItem>
        <BinIcon />
        <Label className="title-14-600">휴지통</Label>
      </MenuItem>
    </VStack>
  );
}

export default MenuSection;
