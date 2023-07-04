import Stack from "./index";
import { StackProps } from "./types";

function HStack({ justifyContent, alignItems, gap, children }: StackProps) {
  return (
    <Stack
      flexDirection="row"
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
    >
      {children}
    </Stack>
  );
}

export default HStack;
