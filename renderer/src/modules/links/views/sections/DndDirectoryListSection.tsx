/**
 * @section DndDirectoryListSection
 * Drag&Drop이 적용된 링크 디렉토리 리스트 섹션
 */

// @dnd-kit
import { DndContext, useSensors, useSensor, MouseSensor, TouchSensor, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { restrictToWindowEdges, restrictToVerticalAxis } from "@dnd-kit/modifiers";
// model
import LinkCategory from "@modules/links/models/LinkCategory";
// views
import { DirectoryList } from "@modules/links/views/styles";
import DndDirectoryCard from "@modules/links/views/components/DndDirectoryCard";

type Props = {
  currentId: number;
  directories: LinkCategory[];
  setCurrentId: (id: number) => void;
};

export default function DndDirectoryListSection({ currentId, directories, setCurrentId }: Props) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor)
  );
  return (
    <DirectoryList>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToWindowEdges, restrictToVerticalAxis]}
      >
        <SortableContext items={directories} strategy={rectSortingStrategy}>
          {directories.map((item) => (
            <DndDirectoryCard
              key={item.id}
              item={item}
              isActive={currentId === item.id}
              onClick={(e) => setCurrentId(item.id)}
            />
          ))}
        </SortableContext>
      </DndContext>
    </DirectoryList>
  );
}
