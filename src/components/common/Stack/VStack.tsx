import Stack from './index';
import { StackProps } from './types';

function VStack({ justifyContent, alignItems, gap, children }: StackProps) {
  return (
    <Stack
      flexDirection="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
    >
      {children}
    </Stack>
  );
}

export default VStack;
