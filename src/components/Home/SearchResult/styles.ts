import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  display: flex;
  gap: 8px;
  padding: 18px 0;

  & > span:last-of-type {
    color: ${ColorPalette.gray[600]};
  }
`;

const OrderToggleContainer = styled.div`
  display: flex;
  padding: 4px;
  background-color: ${ColorPalette.gray[200]};
  border-radius: 4px;
`;

const OrderToggleItem = styled.div`
  width: 80px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${ColorPalette.gray[500]};
  border-radius: 4px;
  cursor: pointer;
`;

export const styles = {
  orderToggleSelected: {
    backgroundColor: ColorPalette.white,
    color: ColorPalette.gray[900],
  },
};

export default {
  Container,
  Header,
  OrderToggleContainer,
  OrderToggleItem,
};
