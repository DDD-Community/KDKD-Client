import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <VStack style={{ width: '100%' }}>
      <MenuItem
        onClick={() => {
          onItemClick('전체 카테고리');
          setSearchParams('');
        }}
        isSelected={selectedItem === '전체 카테고리'}
      >
        <MenuIcon />
        <Label className="label-14-400">전체 카테고리</Label>
      </MenuItem>
      <MenuItem
        onClick={() => onItemClick('uncategorized')}
        isSelected={selectedItem === 'uncategorized'}
      >
        <FolderAlertIcon />
        <Label className="label-14-400">미분류 URL</Label>
      </MenuItem>
      <MenuItem
        onClick={() => {
          onItemClick('trash');
          navigate({ pathname: '/trash' });
        }}
        isSelected={location.pathname === 'trash'}
      >
        <BinIcon />
        <Label className="label-14-400">휴지통</Label>
      </MenuItem>
    </VStack>
  );
}

export default MenuSection;
