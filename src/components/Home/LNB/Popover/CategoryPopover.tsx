import BinIcon from '@/assets/svg/BinIcon';
import MemoIcon from '@/assets/svg/MemoIcon';
import StarIcon from '@/assets/svg/StarIcon';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import S from './style';

interface Props {
  onAddFavorites: () => void;
  onOpenNameInput: () => void;
  onDeleteCategory: () => void;
}

function CategoryPopover({
  onAddFavorites,
  onOpenNameInput,
  onDeleteCategory,
}: Props) {
  return (
    <S.PopoverContainer>
      <S.PopoverContentItem onClick={onAddFavorites}>
        <StarIcon />
        <Label>즐겨찾기 추가</Label>
      </S.PopoverContentItem>
      <S.PopoverContentItem onClick={onOpenNameInput}>
        <MemoIcon />
        <Label>카테고리 이름 수정</Label>
      </S.PopoverContentItem>
      <S.PopoverContentItem onClick={onDeleteCategory}>
        <BinIcon />
        <Label>카테고리 삭제</Label>
      </S.PopoverContentItem>
    </S.PopoverContainer>
  );
}

export default CategoryPopover;
