import BinIcon from '@/assets/svg/BinIcon';
import MemoIcon from '@/assets/svg/MemoIcon';
import StarIcon from '@/assets/svg/StarIcon';
import { Label } from '@/components/common/Typography';
import { PopoverContainer, PopoverContentItem } from './style';

interface Props {
  id: number;
}

function FavoritesPopover({ id }: Props) {
  return (
    <PopoverContainer>
      <PopoverContentItem>
        <StarIcon />
        <Label>즐겨찾기 해제</Label>
      </PopoverContentItem>
      <PopoverContentItem>
        <MemoIcon />
        <Label>카테고리 이름 수정</Label>
      </PopoverContentItem>
      <PopoverContentItem>
        <BinIcon />
        <Label>카테고리 삭제</Label>
      </PopoverContentItem>
    </PopoverContainer>
  );
}

export default FavoritesPopover;
