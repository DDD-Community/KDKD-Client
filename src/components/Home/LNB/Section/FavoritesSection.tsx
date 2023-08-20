import Icon from '@/components/common/Icon';
import FavoritesItem from '../Items/FavoritesItem';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function FavoritesSection() {
  return (
    <Section>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        즐겨찾기
      </Label>
      <FavoritesItem isFocused={true}>
        <>
          <div style={{ width: '16px' }} />
          <Icon name="StarIcon" />
          <Label className="title-14-600">전체 카테고리</Label>
        </>
      </FavoritesItem>
    </Section>
  );
}

export default FavoritesSection;
