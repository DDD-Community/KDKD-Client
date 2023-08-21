import FavoritesItem from '../Items/FavoritesItem';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import StarIcon from '@/assets/svg/StarIcon';
import VStack from '@/components/common/Stack/VStack';

function FavoritesSection() {
  return (
    <VStack gap={8}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        즐겨찾기
      </Label>
      <VStack>
        <FavoritesItem isFocused={true}>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
        <FavoritesItem>
          <div style={{ width: '16px' }} />
          <StarIcon />
          <Label className="title-14-600">전체 카테고리</Label>
        </FavoritesItem>
      </VStack>
    </VStack>
  );
}

export default FavoritesSection;
