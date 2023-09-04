import React, { useEffect, useRef, useState } from 'react';
import { NodeModel, useDragOver } from '@minoru/react-dnd-treeview';
import ArrowRightIcon from '@/assets/svg/ArrowRightIcon';
import FilledCategoryIcon from '@/assets/svg/FilledCategoryIcon';
import { Input } from '@/components/ui/input';
import Done from '@/assets/svg/Done';
import { Label } from '@/components/common/Typography';
import S, { styles as BaseStyles, selectedStyle } from './style';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import MoreIcon from '@/assets/svg/MoreIcon';
import CategoryPopover from '../Popover/CategoryPopover';

type Props = {
  node: NodeModel;
  depth: number;
  isOpen: boolean;
  isSelected: boolean;
  onToggle: (id: NodeModel['id']) => void;
  onClick: (id: NodeModel['id']) => void;
  onAddFavorites: (id: NodeModel['id']) => void;
  onChangeName: (id: NodeModel['id'], name: string) => void;
  onDeleteCategory: (id: NodeModel['id']) => void;
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
  const [isNameInputOpened, setIsNameInputOpened] = useState(false);

  /** drag하여 아이템을 hover했을 시 자동으로 tree가 펼쳐질 수 있도록 함 */
  const dragOverProps = useDragOver(
    props.node.id,
    props.isOpen,
    props.onToggle,
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  const nameInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isNameInputOpened && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isNameInputOpened]);

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e,
  ) => {
    if (e.key === 'Enter' && newCategoryName.trim().length > 0) {
      props.onChangeName(props.node.id, newCategoryName.trim());
      setNewCategoryName('');
      setIsNameInputOpened(false);
    } else if (e.key === 'Escape') {
      setIsNameInputOpened(false);
    }
  };

  const submitName = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (newCategoryName.trim().length > 0) {
      props.onChangeName(props.node.id, newCategoryName.trim());
    }
    setNewCategoryName('');
    setIsNameInputOpened(false);
  };

  return (
    <div
      css={{
        ...BaseStyles.container,
        paddingInlineStart: props.depth * 22 + 10,
        ...(props.isSelected ? selectedStyle : {}),
      }}
      {...dragOverProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => props.onClick(props.node.id)}
    >
      <S.LeftSection>
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
        {isNameInputOpened ? (
          <div style={styles.inputWrapper}>
            <Input
              style={styles.input}
              placeholder="신규 카테고리 명"
              onChange={handleChangeName}
              onKeyDown={handleInputKeyDown}
              onClick={(e) => e.stopPropagation()}
              ref={nameInputRef}
            />
            <Done onClick={submitName} />
          </div>
        ) : (
          <Label className="label-14-400">{props.node.text}</Label>
        )}
      </S.LeftSection>
      <S.RightSection>
        {isHovered && (
          <Popover>
            <PopoverTrigger onClick={(e) => e.stopPropagation()}>
              <div>
                <MoreIcon />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <CategoryPopover
                onAddFavorites={() => props.onAddFavorites(props.node.id)}
                onOpenNameInput={() => setIsNameInputOpened(true)}
                onDeleteCategory={() => props.onDeleteCategory(props.node.id)}
              />
            </PopoverContent>
          </Popover>
        )}
      </S.RightSection>
    </div>
  );
}

export default CategoryItem;
