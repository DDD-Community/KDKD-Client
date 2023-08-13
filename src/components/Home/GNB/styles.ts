import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const GNBWrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 80px 15px;
`;

const InputWrapper = styled.div`
  width: 1175px;
  display: flex;
  align-items: flex-start;

  &:focus {
    background-color: black !important;
  }
`;

const SearchInputStyle = {
  display: 'flex',
  padding: '8px 16px',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '8px',
  backgroundColor: ColorPalette.gray['100'],
};

export default {
  GNBWrapper,
  InputWrapper,
  SearchInputStyle,
};
