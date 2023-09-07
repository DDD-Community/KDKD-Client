import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const LNBWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  padding: 10px 0;
  background-color: ${ColorPalette.gray['000']};
`;

export default {
  LNBWrapper,
};
