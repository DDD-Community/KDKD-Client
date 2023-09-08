import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const RecentlySearchWrapper = styled.div`
  width: 1060px;
  position: absolute;
  transform: translate(-50%, 0%);
  left: 50%;
  background-color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 24px 32px;
  z-index: 100;
  top: 64px;
`;

const Keyword = styled.span`
  padding: 4px 4px 4px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: ${ColorPalette.gray[100]};
  }
`;

const Tag = styled.span`
  padding: 4px 4px 4px 8px;
  border-radius: 4px;
  border: 1px solid ${ColorPalette.gray[300]};
  background-color: ${ColorPalette.gray['000']};
  cursor: pointer;

  &:hover {
    border: none;
    background-color: ${ColorPalette.blue['000']};
  }
`;

const TagHash = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${ColorPalette.blue[200]};
`;


export default {
  RecentlySearchWrapper,
  Keyword,
  Tag,
  TagHash,
};
