import * as React from 'react';

import { cn } from '@/lib/utils';
import { ColorPalette } from '@/styles/ColorPalette';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const textareaStyle = {
};
const textareaCssStyle = {
  resize: 'none' as const,
  borderRadius: '4px',
  '&:focus': {
    outline: 'none',
    border: `1px solid ${ColorPalette.primary}`,
    boxShadow: `0px 0px 4px 0px ${ColorPalette.primary}`,
  },
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: ColorPalette.gray[400],
    borderRadius: '100px',
  },
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        css={textareaCssStyle}
        ref={ref}
        style={{ ...textareaStyle, ...style }}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
