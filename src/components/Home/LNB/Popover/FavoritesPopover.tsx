import BinIcon from '@/assets/svg/BinIcon';
import MemoIcon from '@/assets/svg/MemoIcon';
import StarIcon from '@/assets/svg/StarIcon';
import { Label } from '@/components/common/Typography';
import S from './style';

interface Props {
  id: number;
}

function FavoritesPopover({ id }: Props) {
  return (
    <S.PopoverContainer>
      <S.PopoverContentItem>
        <StarIcon />
        <Label>즐겨찾기 해제</Label>
      </S.PopoverContentItem>
      <S.PopoverContentItem>
        <MemoIcon />
        <Label>카테고리 이름 수정</Label>
      </S.PopoverContentItem>
      <S.PopoverContentItem>
        <BinIcon />
        <Label>카테고리 삭제</Label>
      </S.PopoverContentItem>
    </S.PopoverContainer>
  );
}

export default FavoritesPopover;
