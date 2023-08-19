import styled from '@emotion/styled';
import { Label } from '@/components/common/Typography';
import React, { PropsWithChildren } from 'react';
import { ColorPalette } from '@/styles/ColorPalette';

interface Props {
  count?: number;
  isFocused?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const focusedStyle = {
  backgroundColor: ColorPalette.blue[100],
  span: {
    fontWeight: '600',
    lineHeight: '20px',
    color: ColorPalette.primary,
  },
  path: {
    fill: ColorPalette.primary,
  },
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    padding: '0 10px',
    borderRadius: '6px',
    cursor: 'pointer',

    '&:hover': {
      ...focusedStyle,
    },
  },
};

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RightSection = styled.div`
  span {
    color: ${ColorPalette.gray[500]};
  }
`;

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
