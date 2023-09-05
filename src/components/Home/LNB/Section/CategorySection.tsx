import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import SampleData from '@/components/common/sample_data.json';
import { ColorPalette } from '@/styles/ColorPalette';
import CssStyles from './CategorySection.module.css';
import { DndProvider } from 'react-dnd';
import {
  DropOptions,
  MultiBackend,
  NodeModel,
  Tree,
  getBackendOptions,
} from '@minoru/react-dnd-treeview';
import CategoryItem from '../Items/CategoryItem';
import { fetcher } from '@/api';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

export type NodeData = {
  count?: number;
};

function CategorySection({ selectedItem, onItemClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  // const {
  //   data: treeData,
  //   isLoading,
  //   mutate,
  // } = useSWR<NodeModel[]>('/categories', fetcher);

  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);

  const handleDrop = (
    newTree: NodeModel[],
    { dragSourceId, dropTargetId, dragSource, dropTarget }: DropOptions,
  ) => {
    console.log(
      'dragSourceId, dropTargetId, dragSource, dropTarget',
      dragSourceId,
      dropTargetId,
      dragSource,
      dropTarget,
    );
    setTreeData(newTree);
    // mutate([...newTree]);
  };

  const handleSelect = (id: number) => {
    onItemClick(`Category/${id}`);
    searchParams.set('categoryId', id.toString());
    setSearchParams(searchParams);
  };

  const handleAddFavorites = (id: NodeModel['id']) => {
    console.log('handleAddFavorites', id);
  };

  const handleChangeName = (id: NodeModel['id'], newCategoryName: string) => {
    const newTree = [...treeData];

    // 배열에서 id가 1인 요소를 찾습니다.
    const indexToUpdate = newTree.findIndex((item) => item.id === id);

    // 요소를 찾았을 경우에만 text를 업데이트합니다.
    if (indexToUpdate !== -1) {
      newTree[indexToUpdate] = {
        ...newTree[indexToUpdate],
        text: newCategoryName,
      };
    }

    // mutate([...newTree])
    setTreeData([...newTree]);
  };

  const handleDeleteCategory = (id: NodeModel['id']) => {
    console.log('handleDeleteCategory', id);
  };

  return (
    <VStack style={{ width: '100%' }}>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        카테고리
      </Label>
      {treeData && (
        <section style={{ width: '100%' }}>
          <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <div style={{ height: '100%' }}>
              <Tree
                tree={treeData}
                rootId={0}
                render={(node: NodeModel, { depth, isOpen, onToggle }) => (
                  <CategoryItem
                    node={node}
                    depth={depth}
                    isOpen={isOpen}
                    onToggle={onToggle}
                    onClick={() => handleSelect(Number(node.id))}
                    onAddFavorites={handleAddFavorites}
                    onChangeName={handleChangeName}
                    onDeleteCategory={handleDeleteCategory}
                    isSelected={selectedItem === `Category/${node.id}`}
                  />
                )}
                dragPreviewRender={(monitorProps) => (
                  <div>{monitorProps.item.text}</div>
                )}
                onDrop={handleDrop}
                classes={{
                  root: CssStyles.treeRoot,
                  draggingSource: CssStyles.draggingSource,
                  dropTarget: CssStyles.dropTarget,
                  placeholder: CssStyles.placeholderContainer,
                }}
              ></Tree>
            </div>
          </DndProvider>
        </section>
      )}
    </VStack>
  );
}

export default CategorySection;
