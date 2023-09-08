import { ColorPalette } from '@/styles/ColorPalette';
import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: ${ColorPalette.white};

  &:hover {
    background-color: ${ColorPalette.blue['000']};
  }
`;

const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${ColorPalette.gray[100]};
`;

const HoveredIconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const HoveredIcon = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;

  & > svg > path {
    fill: ${ColorPalette.black};
  }

  &:hover {
    background-color: ${ColorPalette.alpha['01-08']};

    & > svg > path {
      fill: ${ColorPalette.gray[800]};
    }
  }
`;

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > svg > path {
    fill: ${ColorPalette.gray[600]};
  }

  & > span {
    width: 900px;
    color: ${ColorPalette.gray[500]};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Tag = styled.span`
  padding: 2px 8px;
  background-color: ${ColorPalette.gray['000']};
  border: 1px solid ${ColorPalette.gray[300]};
  border-radius: 4px;
`;

export const styles = {
  highlightStyle: {
    color: ColorPalette.blue[500],
    backgroundColor: 'transparent',
  },
};

export default {
  Container,
  Image,
  Divider,
  HoveredIconContainer,
  HoveredIcon,
  Link,
  DescriptionSection,
  Tag,
};
