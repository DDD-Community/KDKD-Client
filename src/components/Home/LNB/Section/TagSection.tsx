import TagIcon from '@/assets/svg/TagIcon';
import TagItem from '../Items/TagItem';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import { ColorPalette } from '@/styles/ColorPalette';

function TagSection() {
  return (
    <VStack gap={8}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        태그
      </Label>
      <VStack>
        <TagItem>
          <TagIcon />
          <Label className="label-14-400">사이드 프로젝트</Label>
        </TagItem>
        <TagItem>
          <TagIcon />
          <Label className="label-14-400">유알</Label>
        </TagItem>
        <TagItem>
          <TagIcon />
          <Label className="label-14-400">프로젝트</Label>
        </TagItem>
      </VStack>
    </VStack>
  );
}

export default TagSection;
