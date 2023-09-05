import { Label } from '@/components/common/Typography';
import { PropsWithChildren } from 'react';
import { styles, selectedStyle, LeftSection, RightSection } from './style';

interface Props {
  count?: number;
  isSelected: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function TagItem({
  count = 0,
  isSelected,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      css={{
        ...styles.container,
        ...{ height: '32px' },
        ...(isSelected ? selectedStyle : {}),
      }}
      onClick={onClick}
    >
      <LeftSection>{children}</LeftSection>
      <RightSection>
        <Label className="label-12-400">{count}</Label>
      </RightSection>
    </div>
  );
}

export default TagItem;
