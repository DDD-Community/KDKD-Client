import TagIcon from '@/assets/svg/TagIcon';
import TagItem from '../Items/TagItem';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import { ColorPalette } from '@/styles/ColorPalette';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

function TagSection({ selectedItem, onItemClick }: Props) {
  return (
    <VStack gap={8}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        태그
      </Label>
      <VStack>
        <TagItem
          onClick={() => onItemClick('Tag/사이드 프로젝트')}
          isSelected={selectedItem === 'Tag/사이드 프로젝트'}
        >
          <TagIcon />
          <Label className="label-14-400">사이드 프로젝트</Label>
        </TagItem>
        <TagItem
          onClick={() => onItemClick('Tag/유알')}
          isSelected={selectedItem === 'Tag/유알'}
        >
          <TagIcon />
          <Label className="label-14-400">유알</Label>
        </TagItem>
        <TagItem
          onClick={() => onItemClick('Tag/프로젝트')}
          isSelected={selectedItem === 'Tag/프로젝트'}
        >
          <TagIcon />
          <Label className="label-14-400">프로젝트</Label>
        </TagItem>
      </VStack>
    </VStack>
  );
}

export default TagSection;
