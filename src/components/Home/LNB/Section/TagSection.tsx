import TagIcon from '@/assets/svg/TagIcon';
import TagItem from '../Items/TagItem';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import { ColorPalette } from '@/styles/ColorPalette';
import useSWR from 'swr';
import { fetcher } from '@/api';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

function TagSection({ selectedItem, onItemClick }: Props) {
  const { data }: { data: { name: string }[] } = useSWR('/tags', fetcher);

  if (!data) {
    return null;
  }

  return (
    <VStack gap={8} style={{ width: '100%' }}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        태그
      </Label>
      <VStack style={{ width: '100%' }}>
        {data.map(({ name }) => (
          <TagItem
            key={name}
            onClick={() => onItemClick(`Tag/${name}`)}
            isSelected={selectedItem === `Tag/${name}`}
          >
            <TagIcon />
            <Label className="label-14-400">{name}</Label>
          </TagItem>
        ))}
      </VStack>
    </VStack>
  );
}

export default TagSection;
