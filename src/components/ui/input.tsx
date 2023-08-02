import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '../common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: {
    isError: boolean;
    helperText: string;
  };
};

const inputBorderStyle = {
  '&:focus': {
    outline: 'none',
    border: `1px solid ${ColorPalette.primary}`,
    boxShadow: `0px 0px 4px 0px ${ColorPalette.primary}`,
  },
};

const helperTextStyle = {
  color: ColorPalette.error,
  paddingTop: '4xp',
  paddingLeft: '12px',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          css={inputBorderStyle}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error?.isError && (
          <Label style={helperTextStyle}>{error.helperText}</Label>
        )}
      </>
    );
  },
);
Input.displayName = 'Input';

export { Input };
