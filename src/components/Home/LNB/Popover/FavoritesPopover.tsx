import StarIcon from '@/assets/svg/StarIcon';
import { Label } from '@/components/common/Typography';
import S from './style';

interface Props {
  onDeleteFavorites: () => void;
}

function FavoritesPopover({ onDeleteFavorites }: Props) {
  return (
    <S.PopoverContainer>
      <S.PopoverContentItem onClick={onDeleteFavorites}>
        <StarIcon />
        <Label>즐겨찾기 해제</Label>
      </S.PopoverContentItem>
    </S.PopoverContainer>
  );
}

export default FavoritesPopover;
