import React from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from '@/styles/ColorPalette';

export const styles: Record<string, React.CSSProperties> = {
  textEllipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const Container = styled.div`
  width: 100%;
  height: 144px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${ColorPalette.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Image = styled.img`
  height: 64px;
  border-radius: 8px;
  background-color: ${ColorPalette.gray[200]};
`;

export default {
  Container,
  Image,
};
