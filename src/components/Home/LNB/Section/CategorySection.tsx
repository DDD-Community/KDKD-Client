import { useState } from 'react';
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

export type NodeData = {
  count?: number;
};

function CategorySection() {
  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);
  const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

  const handleAddCategory = (parentId: NodeModel['id']) => {
    // id가 -1인 디렉토리가 있다면 노노
    const newText = '신규 카테고리';

    const newCategory: NodeModel = {
      id: -1,
      parent: Number(parentId),
      text: '신규 카테고리',
    };
    setTreeData([...treeData, newCategory]);
  };
  const handleSubmitNewCategory = () => {};
  const handleSelect = () => {};

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
                  onAdd={handleAddCategory}
                  onSubmitNewCategory={handleSubmitNewCategory}
                  onClick={handleSelect}
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
