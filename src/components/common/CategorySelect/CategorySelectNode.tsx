import React, { useRef, useState } from 'react';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { Body } from '../Typography';
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon';
import CategoryIcon from '@/assets/svg/Category';
import { ColorPalette } from '@/styles/ColorPalette';
import AddIcon from '@/assets/svg/AddIcon';

export type CustomData = {
  fileType: string;
  fileSize: string;
};

type Props = {
  node: NodeModel;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel['id']) => void;
  onAdd: (parentId: NodeModel['id']) => void;
  onClick: (id: NodeModel['id']) => void;
};

const cssStyles = {
  container: {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr auto',
    height: '32px',
    paddingInlineEnd: '8px',
    '&:hover': {
      backgroundColor: ColorPalette.blue['000'],
    },
  },
};

const styles = {
  expandIconWrapper: {
    alignItems: 'center',
    fontSize: '0',
    display: 'flex',
    height: '24px',
    justifyContent: 'center',
    width: '24px',
    transition: 'transform linear .1s',
    transform: 'rotate(0deg)',
  },
  expandIconWrapperOpened: {
    transform: 'rotate(90deg)',
  },
  labelGridItem: {
    paddingInlineStart: '8px',
  },
  addIcon: {
    cursor: 'pointer',
  },
};

const CategorySelectNode: React.FC<Props> = (props) => {
  const indent = props.depth * 24;
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onAdd(props.node.id);
    if (!props.isOpen) props.onToggle(props.node.id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      css={{ ...cssStyles.container, paddingInlineStart: indent }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => props.onClick(props.node.id)}
    >
      <div
        style={{
          ...styles.expandIconWrapper,
          ...(props.isOpen ? styles.expandIconWrapperOpened : {}),
        }}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <div>
        <CategoryIcon />
      </div>
      <div style={styles.labelGridItem}>
        <Body>{props.node.text}</Body>
      </div>
      {isHovered && (
        <div style={styles.addIcon}>
          <AddIcon onClick={handleAdd} />
        </div>
      )}
    </div>
  );
};

export default CategorySelectNode;
