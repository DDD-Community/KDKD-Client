import React from 'react';
import { NodeModel } from '@minoru/react-dnd-treeview';
import styles from './Placeholder.module.css';
import { CustomData } from '../Section/CategorySection';

type Props = {
  node: NodeModel<CustomData>;
  depth: number;
};

export function CategoryPlaceholder(props: Props) {
  return (
    <div
      style={{
        backgroundColor: '#1967d2',
        height: '2px',
        position: 'absolute',
        right: 0,
        transform: 'translateY(-50%)',
        top: 0,
        left: props.depth * 24,
      }}
    />
  );
}

export default CategoryPlaceholder;
