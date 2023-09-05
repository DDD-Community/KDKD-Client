import Stack from './index';
import { StackProps } from './types';

function HStack({
  justifyContent,
  alignItems,
  gap,
  style,
  children,
}: StackProps) {
  return (
    <Stack
      flexDirection="row"
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      style={style}
    >
      {children}
    </Stack>
  );
}

export default HStack;
