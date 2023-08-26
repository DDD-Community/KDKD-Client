import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import MenuIcon from '@/assets/svg/MenuIcon';
import FolderAlertIcon from '@/assets/svg/FolderAlertIcon';
import BinIcon from '@/assets/svg/BinIcon';
import CategoryIcon from '@/assets/svg/CategoryIcon';
import StarIcon from '@/assets/svg/StarIcon';
import MemoIcon from '@/assets/svg/MemoIcon';
import ShareIcon from '@/assets/svg/ShareIcon';
import OpenCategoryIcon from '@/assets/svg/OpenCategoryIcon';

export type IconName =
  | 'MenuIcon'
  | 'BinIcon'
  | 'FolderAlertIcon'
  | 'CategoryIcon'
  | 'StarIcon'
  | 'MemoIcon'
  | 'ShareIcon'
  | 'OpenCategoryIcon';

interface Props {
  name: IconName;
}

export const IconTable: Record<IconName, () => EmotionJSX.Element> = {
  MenuIcon: MenuIcon,
  BinIcon: BinIcon,
  FolderAlertIcon: FolderAlertIcon,
  CategoryIcon: CategoryIcon,
  StarIcon: StarIcon,
  MemoIcon: MemoIcon,
  ShareIcon: ShareIcon,
  OpenCategoryIcon: OpenCategoryIcon,
};

function Icon({ name = 'MenuIcon' }: Props) {
  if (typeof IconTable[name] !== 'undefined') {
    return React.createElement(IconTable[name]);
  }
  return <MenuIcon />;
}

export default Icon;
