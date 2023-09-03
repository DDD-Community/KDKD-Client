import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { Label } from '@/components/common/Typography';
import { ColorPalette } from '@/styles/ColorPalette';
import CssStyles from './CategorySection.module.css';
import VStack from '@/components/common/Stack/VStack';
import {
  MultiBackend,
  NodeModel,
  Tree,
  getBackendOptions,
} from '@minoru/react-dnd-treeview';
import SampleData from '@/components/common/sample_data.json';
import CategoryItem from '../Items/CategoryItem';

interface Props {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

export type NodeData = {
  count?: number;
};

function CategorySection({ selectedItem, onItemClick }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);
  const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

  const handleSelect = (id: number) => {
    onItemClick(`Category/${id}`);
    searchParams.set('categoryId', id.toString());
    setSearchParams(searchParams);
  };

  return (
    <VStack>
      <Label className="label-12-600" style={{ color: ColorPalette.gray[500] }}>
        카테고리
      </Label>
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
    </VStack>
  );
}

export default CategorySection;
