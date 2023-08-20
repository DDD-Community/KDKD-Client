import Icon from '@/components/common/Icon';
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

function FavoritesPopover({ id }: Props) {
  return (
    <PopoverContainer>
      <PopoverContentItem>
        <Icon name="StarIcon" />
        <Label>즐겨찾기 해제</Label>
      </PopoverContentItem>
      <PopoverContentItem>
        <Icon name="MemoIcon" />
        <Label>카테고리 이름 수정</Label>
      </PopoverContentItem>
      <PopoverContentItem>
        <Icon name="BinIcon" />
        <Label>카테고리 삭제</Label>
      </PopoverContentItem>
    </PopoverContainer>
  );
}

export default FavoritesPopover;
