import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';

const GNBWrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 80px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

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
  width: '100%',
};

export { GNBWrapper, InputWrapper, SearchInputStyle };
