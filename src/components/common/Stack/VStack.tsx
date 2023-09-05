import Stack from './index';
import { StackProps } from './types';

function VStack({
  justifyContent,
  alignItems,
  gap,
  style,
  children,
}: StackProps) {
  return (
    <Stack
      flexDirection="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      style={style}
    >
      {children}
    </Stack>
  );
}

export default VStack;
