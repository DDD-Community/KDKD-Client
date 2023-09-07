import { Label } from '@/components/common/Typography';
import { PropsWithChildren } from 'react';
import S, { styles, selectedStyle } from './styles';

interface Props {
  count?: number;
  isSelected: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function MenuItem({
  count = 0,
  isSelected = false,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      css={{ ...styles.container, ...(isSelected ? selectedStyle : {}) }}
      onClick={onClick}
    >
      <S.LeftSection>{children}</S.LeftSection>
      <S.RightSection>
        {/* <Label className="label-12-400">{count}</Label> */}
      </S.RightSection>
    </div>
  );
}

export default MenuItem;
