import React, { useEffect, useRef, useState } from 'react';
import { NodeModel } from '@minoru/react-dnd-treeview';
import { Body } from '../Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon';
import CategoryIcon from '@/assets/svg/Category';
import AddIcon from '@/assets/svg/AddIcon';
import { Input } from '@/components/ui/input';
import Done from '@/assets/svg/Done';

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
  onSubmitNewCategory: (name: string) => void;
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
  inputWrapper: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  input: {
    height: '18px',
    fontSize: '14px',
    padding: '10px 4px',
  },
  addIcon: {
    cursor: 'pointer',
  },
};

const CategorySelectNode: React.FC<Props> = (props) => {
  const indent = props.depth * 24;
  const [isHovered, setIsHovered] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onAdd(props.node.id);
    if (!props.isOpen) props.onToggle(props.node.id);
  };

  const submitName = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (newCategoryName.trim().length > 0) {
      props.onSubmitNewCategory(newCategoryName);
    }
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
    if (e.key === 'Enter' && newCategoryName.trim().length > 0) {
      props.onSubmitNewCategory(newCategoryName);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const nameInputRef = useRef<HTMLInputElement>(null);
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewCategoryName(e.target.value);
  };
  useEffect(() => {
    nameInputRef.current?.focus();
  }, [nameInputRef]);

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
        {props.node.id === -1 ? (
          <div style={styles.inputWrapper}>
            <Input
              style={styles.input}
              placeholder="신규 카테고리 명"
              onChange={handleNameChange}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={handleInputKeyDown}
              ref={nameInputRef}
            />
            <Done onClick={submitName} />
          </div>
        ) : (
          <Body>{props.node.text}</Body>
        )}
      </div>
      {isHovered && props.node.id !== -1 && (
        <div style={styles.addIcon}>
          <AddIcon onClick={handleAdd} />
        </div>
      )}
    </div>
  );
};

export default CategorySelectNode;
