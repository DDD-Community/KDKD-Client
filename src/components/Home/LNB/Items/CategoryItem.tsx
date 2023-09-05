import React, { useEffect, useRef, useState } from 'react';
import { NodeModel } from '@minoru/react-dnd-treeview';
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon';
import FilledCategoryIcon from '@/assets/svg/FilledCategoryIcon';
import { Input } from '@/components/ui/input';
import Done from '@/assets/svg/Done';
import { Label } from '@/components/common/Typography';
import {
  styles as BaseStyles,
  LeftSection,
  RightSection,
  selectedStyle,
} from './style';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import MoreIcon from '@/assets/svg/MoreIcon';
import FavoritesPopover from '../Popover/FavoritesPopover';
import { NodeData } from '../Section/CategorySection';

type Props = {
  node: NodeModel;
  depth: number;
  isOpen: boolean;
  isSelected: boolean;
  onToggle: (id: NodeModel['id']) => void;
  onClick: (id: NodeModel['id']) => void;
};

const styles = {
  expandIconWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '16px',
    width: '16px',
    transition: 'transform linear .1s',
    transform: 'rotate(0deg)',
  },
  expandIconWrapperOpened: {
    transform: 'rotate(90deg)',
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

function CategoryItem(props: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const submitName = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (newCategoryName.trim().length > 0) {
      // props.onSubmitNewCategory(newCategoryName);
    }
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
    if (e.key === 'Enter' && newCategoryName.trim().length > 0) {
      // props.onSubmitNewCategory(newCategoryName);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewCategoryName(e.target.value);
  };
  useEffect(() => {
    nameInputRef.current?.focus();
  }, [nameInputRef]);

  return (
    <div
      css={{
        ...BaseStyles.container,
        paddingInlineStart: props.depth * 22 + 10,
        ...(props.isSelected ? selectedStyle : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => props.onClick(props.node.id)}
    >
      <LeftSection>
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
        <FilledCategoryIcon />
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
          <Label className="label-14-400">{props.node.text}</Label>
        )}
      </LeftSection>
      {props.node.id !== -1 && (
        <RightSection>
          {isHovered && (
            <Popover>
              <PopoverTrigger>
                <div>
                  <MoreIcon />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                {/** 임시 */}
                <FavoritesPopover id={1} />
              </PopoverContent>
            </Popover>
          )}
        </RightSection>
      )}
    </div>
  );
}

export default CategoryItem;
