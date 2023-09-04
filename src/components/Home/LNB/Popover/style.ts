import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const PopoverContainer = styled.div`
  padding: 4px;
`;

const PopoverContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${ColorPalette.gray[100]};
  }
`;

export default {
  PopoverContainer,
  PopoverContentItem,
};
