import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import MenuIcon from '@/assets/svg/MenuIcon';
import FolderAlertIcon from '@/assets/svg/FolderAlertIcon';
import BinIcon from '@/assets/svg/BinIcon';
import CategoryIcon from '@/assets/svg/CategoryIcon';
import StarIcon from '@/assets/svg/StarIcon';

export type IconName =
  | 'MenuIcon'
  | 'BinIcon'
  | 'FolderAlertIcon'
  | 'CategoryIcon'
  | 'StarIcon';

interface Props {
  name: IconName;
}

export const IconTable: Record<IconName, () => EmotionJSX.Element> = {
  MenuIcon: MenuIcon,
  BinIcon: BinIcon,
  FolderAlertIcon: FolderAlertIcon,
  CategoryIcon: CategoryIcon,
  StarIcon: StarIcon,
};

const Icon: React.FC<Props> = ({ name = 'MenuIcon' }: Props) => {
  if (typeof IconTable[name] !== 'undefined') {
    return React.createElement(IconTable[name]);
  }
  return <MenuIcon />;
};

export default Icon;
