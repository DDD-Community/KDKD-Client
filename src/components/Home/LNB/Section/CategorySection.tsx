import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import { DndProvider } from 'react-dnd';
import {
  DropOptions,
  MultiBackend,
  NodeModel,
  Tree,
  getBackendOptions,
} from '@minoru/react-dnd-treeview';
import { api, fetcher } from '@/api';
import { Cookies } from 'react-cookie';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import CategoryItem from '../Items/CategoryItem';
import { ColorPalette } from '@/styles/ColorPalette';
import CssStyles from './CategorySection.module.css';
import SampleData from '@/components/common/sample_data.json';
import { useState } from 'react';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

export type CustomData = {
  order: number;
};

function CategorySection({ selectedItem, onItemClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const cookies = new Cookies();

  const [treeData, setTreeData] = useState(SampleData);
  // const {
  //   data: treeData,
  //   isLoading,
  //   mutate,
  // } = useSWR<NodeModel[]>('/categories', fetcher);

  const handleDrop = (
    newTree: NodeModel<CustomData>[],
    { dragSourceId, dropTargetId, dragSource, dropTarget }: DropOptions,
  ) => {
    console.log(
      'dragSourceId, dropTargetId, dragSource, dropTarget',
      dragSourceId,
      dropTargetId,
      dragSource,
      dropTarget,
    );
    // mutate([...newTree]);
  };

  const handleSelect = (id: number) => {
    onItemClick(`Category/${id}`);
    searchParams.set('categoryId', id.toString());
    setSearchParams(searchParams);
  };

  const handleAddFavorites = (id: NodeModel<CustomData>['id']) => {
    console.log('handleAddFavorites', id);
  };

  const handleChangeName = async (
    id: NodeModel<CustomData>['id'],
    newCategoryName: string,
  ) => {
    if (!treeData) return;

    const newTree = [...treeData];

    const indexToUpdate = newTree.findIndex((item) => item.id === id);

    if (indexToUpdate !== -1) {
      newTree[indexToUpdate] = {
        ...newTree[indexToUpdate],
        text: newCategoryName,
      };
    }

    await api.patch(
      `categories/${id}/name`,
      { name: newCategoryName },
      {
        headers: {
          Authorization: `Bearer ${cookies.get('accessToken')}`,
        },
      },
    );

    // mutate([...newTree]);
  };

  const handleDeleteCategory = (id: NodeModel<CustomData>['id']) => {
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
                render={(
                  node: NodeModel<CustomData>,
                  { depth, isOpen, onToggle },
                ) => (
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
