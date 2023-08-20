import { Label } from '@/components/common/Typography';
import { PropsWithChildren } from 'react';
import { Props } from './types';
import { styles, focusedStyle, LeftSection, RightSection } from './style';

function MenuItem({
  count = 0,
  isFocused = false,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      css={{ ...styles.container, ...(isFocused ? focusedStyle : {}) }}
      onClick={onClick}
    >
      <LeftSection>{children}</LeftSection>
      <RightSection>
        <Label className="label-12-400">{count}</Label>
      </RightSection>
    </div>
  );
}

export default MenuItem;
