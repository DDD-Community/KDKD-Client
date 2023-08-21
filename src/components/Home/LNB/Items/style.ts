import styled from '@emotion/styled';
import { ColorPalette } from '@/styles/ColorPalette';

export const focusedStyle = {
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

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    padding: '0 10px',
    borderRadius: '6px',
    cursor: 'pointer',

    '&:hover': {
      ...focusedStyle,
    },
  },
};

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RightSection = styled.div`
  span {
    color: ${ColorPalette.gray[500]};
  }
`;
