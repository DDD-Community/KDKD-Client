import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;

  & > span:last-of-type {
    color: ${ColorPalette.gray[600]};
  }
`;

export default {
  Container,
  Header,
};
