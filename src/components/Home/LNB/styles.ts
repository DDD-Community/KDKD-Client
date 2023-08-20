import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const LNBWrapper = styled.div`
  flex-basis: 380px;
  height: calc(100vh - 64px);
  padding-left: 80px;
  background-color: ${ColorPalette.blue['000']};
`;

const LNBMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`;

export default {
  LNBWrapper,
  LNBMain,
};
