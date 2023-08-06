import { ReactNode } from 'react';
import { Label } from '../common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';

interface Props {
  label: string;
  children: ReactNode;
}

const style = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '5px',
};

function UrlInfoSection({ children, label }: Props) {
  return (
    <section style={style}>
      <Label style={{ color: ColorPalette.gray[500] }}>{label}</Label>
      {children}
    </section>
  );
}

export default UrlInfoSection;
