import BinIcon from '@/assets/svg/BinIcon';
import MemoIcon from '@/assets/svg/MemoIcon';
import StarIcon from '@/assets/svg/StarIcon';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

interface Props {
  id: number;
}

const PopoverContainer = styled.div`
  padding: 4px;
`;

const PopoverContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${ColorPalette.gray[100]};
  }
`;

function CategoryPopover({ id }: Props) {
  return (
    <PopoverContainer>
      <PopoverContentItem>
        <StarIcon />
        <Label>즐겨찾기 추가</Label>
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

export default CategoryPopover;
