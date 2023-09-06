import React, { useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import {
  getBackendOptions,
  MultiBackend,
  NodeModel,
  Tree,
} from '@minoru/react-dnd-treeview';
import CssStyles from './Category.module.css';
import CategorySelectNode from './CategorySelectNode';
import { Label } from '../Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import CaretUp from '@/assets/svg/CaretUp';
import CaretDown from '@/assets/svg/CaretDown';
import { fetcher } from '@/api/extension';
import { CustomData } from '@/components/Home/LNB/Section/CategorySection';
import useSWR from 'swr';

interface Props {
  onChange: (id: number) => void;
}

const styles = {
  trigger: {
    width: '100%',
    height: '40px',
    padding: '10px 15px',
    borderRadius: '4px',
    backgroundColor: ColorPalette.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  content: {
    width: '100%',
    maxHeight: '376px',
    padding: '8px',
    overflow: 'auto',
    backgroundColor: ColorPalette.white,
  },
};

function CategorySelect({ onChange }: Props) {
  const [categoryPath, setCategoryPath] = useState('');
  const [isContentOpen, setIsContentOpen] = useState(false);

  const { data: treeData, mutate } = useSWR<NodeModel<CustomData>[]>(
    '/categories',
    fetcher,
  );

  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !triggerRef?.current?.contains(event.target as Node) &&
        !contentRef?.current?.contains(event.target as Node)
      ) {
        setIsContentOpen(false);
      }
    };

    if (!treeData) {
      return;
    }

    if (isContentOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      mutate(
        (treeData as NodeModel<CustomData>[]).filter((item) => item.id !== -1),
      );
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isContentOpen]);

  if (!treeData) {
    return <></>;
  }

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };

  const handleValueChange = (val: NodeModel['id']) => {
    onChange(Number(val));
    setCategoryPath(getCategoryPath(treeData, Number(val)));
    setIsContentOpen(false);
  };

  const getCategoryPath = (
    data: NodeModel<CustomData>[],
    id: number,
    result: string[] = [],
  ) => {
    const item = data.find((entry) => Number(entry.id) === id);

    if (!item) {
      return result.join(' / ');
    }

    if (item.parent !== 0) {
      getCategoryPath(data, Number(item.parent), result);
    }

    result.push(item.text);

    return result.join(' / ');
  };

  const handleAddCategory = (parentId: NodeModel['id']) => {
    // id가 -1인 디렉토리가 있다면 노노
    const newText = '신규 카테고리';

    const newCategory: NodeModel = {
      id: -1,
      parent: Number(parentId),
      text: '신규 카테고리',
    };
    // mutate((data: NodeModel<CustomData>) => [...data, newCategory]);
  };

  const generateUniqueCategoryName = (
    parent: number,
    desiredName: string,
  ): string => {
    const sameParentAndTextItems = (treeData as NodeModel<CustomData>[]).filter(
      (item) => item.parent === parent && item.text.startsWith(desiredName),
    );

    if (sameParentAndTextItems.length === 0) {
      return desiredName;
    }

    let maxNumber = 0;
    sameParentAndTextItems.forEach((item) => {
      const numPart = item.text.replace(desiredName, '').trim();
      const num = Number(numPart);
      if (!isNaN(num) && num > maxNumber) {
        maxNumber = num;
      }
    });

    const nextNumber = maxNumber + 1;
    const nextNumberStr = nextNumber.toString().padStart(2, '0');

    return `${desiredName} ${nextNumberStr}`;
  };

  const handleSubmitNewCategory = (newCategoryName: string) => {
    // submit API 보내기
    const newTreeData = [...treeData];
    const targetIndex = newTreeData.findIndex((item) => item.id === -1);

    if (targetIndex !== -1) {
      const newId = (treeData as NodeModel<CustomData>[]).length; // API 응답 데이터(id)
      const newUniqueCategoryName = generateUniqueCategoryName(
        Number(newTreeData[targetIndex].parent),
        newCategoryName,
      );

      newTreeData[targetIndex] = {
        ...newTreeData[targetIndex],
        id: newId,
        text: newUniqueCategoryName,
      };
    }
    mutate(newTreeData);
  };

  return (
    <>
      <div style={styles.trigger} onClick={toggleContent} ref={triggerRef}>
        <Label className="label-14-400">{categoryPath || '미지정'}</Label>
        {isContentOpen ? <CaretUp /> : <CaretDown />}
      </div>
      {isContentOpen && (
        <div style={styles.content} ref={contentRef}>
          <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <div style={{ height: '100%' }}>
              <Tree
                tree={treeData}
                rootId={0}
                render={(node: NodeModel, { depth, isOpen, onToggle }) => (
                  <CategorySelectNode
                    node={node}
                    depth={depth}
                    isOpen={isOpen}
                    onToggle={onToggle}
                    onAdd={handleAddCategory}
                    onSubmitNewCategory={handleSubmitNewCategory}
                    onClick={handleValueChange}
                  />
                )}
                dragPreviewRender={(monitorProps) => (
                  <div>{monitorProps.item.text}</div>
                )}
                canDrag={() => false}
                onDrop={() => false}
                canDrop={() => false}
                classes={{
                  root: CssStyles.treeRoot,
                  draggingSource: CssStyles.draggingSource,
                  dropTarget: CssStyles.dropTarget,
                  placeholder: CssStyles.placeholderContainer,
                }}
              />
            </div>
          </DndProvider>
        </div>
      )}
    </>
  );
}

export default CategorySelect;
