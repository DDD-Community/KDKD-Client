import TagIcon from '@/assets/svg/TagIcon';
import TagItem from '../Items/TagItem';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import { ColorPalette } from '@/styles/ColorPalette';
import useSWR from 'swr';
import { fetcher } from '@/api';
import { useSearchParams } from 'react-router-dom';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

function TagSection({ selectedItem, onItemClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: tagList, mutate } = useSWR<{ name: string }[]>(
    '/tags',
    fetcher,
  );

  const handleClickTagItem = (name: string) => {
    onItemClick(`Tag/${name}`);
    setSearchParams(`keywordRange=tag&urlKeyword=${name}`);
  };

  return (
    <VStack gap={8} style={{ width: '100%' }}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        태그
      </Label>
      {tagList && (
        <VStack style={{ width: '100%' }}>
          {tagList.map(({ name }) => (
            <TagItem
              key={name}
              onClick={() => handleClickTagItem(name)}
              isSelected={selectedItem === `Tag/${name}`}
            >
              <TagIcon />
              <Label className="label-14-400">{name}</Label>
            </TagItem>
          ))}
        </VStack>
      )}
    </VStack>
  );
}

export default TagSection;
