import styled from '@emotion/styled';
import { ColorPalette } from '@/styles/ColorPalette';

export const selectedStyle = {
  backgroundColor: ColorPalette.blue[100],
  span: {
    fontWeight: '600',
    lineHeight: '20px',
    color: ColorPalette.primary,
  },
  'path:not([fill="white"])': {
    fill: ColorPalette.primary,
  },
  '&:hover': {
    color: ColorPalette.primary,
    'path:not([fill="white"])': {
      fill: ColorPalette.primary,
    },
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
      backgroundColor: ColorPalette.gray[100],
      color: ColorPalette.gray[900],
      span: {
        fontWeight: '600',
        lineHeight: '20px',
      },
      'path:not([fill="white"])': {
        fill: ColorPalette.gray[500],
      },
    },
    '&:active': { ...selectedStyle },
  },
};

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  span {
    color: ${ColorPalette.gray[500]};
  }
`;

const MoreIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;

  &:hover {
    background-color: ${ColorPalette.alpha['01-08']};
  }
`;

export default {
  LeftSection,
  RightSection,
  MoreIconWrapper,
};
