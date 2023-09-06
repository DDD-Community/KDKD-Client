import { useSearchParams } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import { DndProvider } from 'react-dnd';
import {
  DropOptions,
  MultiBackend,
  NodeModel,
  Tree,
  getBackendOptions,
} from '@minoru/react-dnd-treeview';
import { api, fetcher, requester } from '@/api';
import { Cookies } from 'react-cookie';
import { Label } from '@/components/common/Typography';
import VStack from '@/components/common/Stack/VStack';
import CategoryItem from '../Items/CategoryItem';
import { ColorPalette } from '@/styles/ColorPalette';
import CssStyles from './CategorySection.module.css';
import { AxiosResponse } from 'axios';
import { FavoritesItemType } from './FavoritesSection';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

export type CustomData = {
  order: number;
};

function CategorySection({ selectedItem, onItemClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { mutate: globalMutate } = useSWRConfig();

  const {
    data: treeData,
    isLoading,
    mutate: setTreeData,
  } = useSWR<NodeModel<CustomData>[]>('/categories', fetcher);

  const handleDrop = async (
    newTreeDummyData: NodeModel<CustomData>[],
    { dragSourceId, dropTargetId }: DropOptions,
  ) => {
    if (!treeData) return;

    try {
      await requester(`/categories/${dragSourceId}/position`, 'PATCH', {
        parentId: dropTargetId,
        aboveTargetId: null,
      });

      const { data }: AxiosResponse<NodeModel<CustomData>[]> = await requester(
        '/categories',
        'GET',
      );

      setTreeData(data);
    } catch (err) {
      return;
    }
  };

  const handleSelect = (id: number) => {
    onItemClick(`Category/${id}`);
    searchParams.set('categoryId', id.toString());
    setSearchParams(searchParams);
  };

  const handleAddFavorites = async (id: NodeModel<CustomData>['id']) => {
    await requester(`/categories/${id}/bookmark`, 'PATCH', { bookmark: true });

    const { data }: AxiosResponse<FavoritesItemType[]> = await requester(
      '/categories/bookmark',
      'GET',
    );

    globalMutate('/categories/bookmark', data);
  };

  const handleChangeName = async (
    id: NodeModel<CustomData>['id'],
    newCategoryName: string,
  ) => {
    if (!treeData) return;

    try {
      await requester(`/categories/${id}/name`, 'PATCH', {
        name: newCategoryName,
      });

      const { data }: AxiosResponse<NodeModel<CustomData>[]> = await requester(
        '/categories',
        'GET',
      );

      setTreeData(data);
    } catch (err) {
      return;
    }
  };

  const handleDeleteCategory = async (id: NodeModel<CustomData>['id']) => {
    if (!treeData) return;

    try {
      await requester(`/categories/${id}`, 'DELETE');

      const { data }: AxiosResponse<NodeModel<CustomData>[]> = await requester(
        '/categories',
        'GET',
      );

      setTreeData(data);
    } catch (err) {
      return;
    }
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
                sort={(nodeA, nodeB) => {
                  if (nodeA.data?.order && nodeB.data?.order) {
                    return nodeA.data?.order - nodeB.data?.order;
                  } else {
                    return 1;
                  }
                }}
                onDrop={handleDrop}
                classes={{
                  root: CssStyles.treeRoot,
                  draggingSource: CssStyles.draggingSource,
                  dropTarget: CssStyles.dropTarget,
                  placeholder: CssStyles.placeholderContainer,
                }}
                // placeholderRender={(node, { depth }) => (
                //   <CategoryPlaceholder node={node} depth={depth} />
                // )}
                // dropTargetOffset={10}
              ></Tree>
            </div>
          </DndProvider>
        </section>
      )}
    </VStack>
  );
}

export default CategorySection;
