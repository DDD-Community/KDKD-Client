import MenuItem from '../Items/MenuItem';
import Icon from '@/components/common/Icon';
import { Label } from '@/components/common/Typography';

function MenuSection() {
  return (
    <section>
      <MenuItem>
        <Icon name="MenuIcon" />
        <Label className="title-14-600">전체 카테고리</Label>
      </MenuItem>
      <MenuItem>
        <Icon name="FolderAlertIcon" />
        <Label className="title-14-600">미분류 URL</Label>
      </MenuItem>
      <MenuItem>
        <Icon name="BinIcon" />
        <Label className="title-14-600">휴지통</Label>
      </MenuItem>
    </section>
  );
}

export default MenuSection;
