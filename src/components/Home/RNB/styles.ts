import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const Container = styled.div`
  flex: 1;
  max-width: 320px;
  background-color: ${ColorPalette.white};
  padding: 18px 0;
`;

const Header = styled.div`
  padding: 0 8px;
`;

const Count = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  color: ${ColorPalette.primary};
  background-color: ${ColorPalette.blue[100]};
  font-size: 16px;
  font-weight: 600;
`;

export default { Container, Header, Count };
