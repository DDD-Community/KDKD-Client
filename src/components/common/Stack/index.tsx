import { StackProps } from './types';

interface Props extends StackProps {
  flexDirection: 'row' | 'column';
}

function Stack({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: flexDirection ?? 'row',
        justifyContent: justifyContent ?? 'flex-start',
        alignItems: alignItems ?? 'flex-start',
        gap: gap ?? 0,
        width: '100%',
      }}
    >
      {children}
    </div>
  );
}

export default Stack;
