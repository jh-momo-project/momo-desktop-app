/**
 * @section DndLinkListSection
 * Drag&Drop이 적용된 링크리스트 섹션
 */

// @dnd-kit
import { DndContext, useSensors, useSensor, MouseSensor, TouchSensor, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
// model
import Link from "@modules/links/models/Link";
// views
import LinkCard from "@modules/links/views/components/DndLinkCard";
import { LinkList } from "@modules/links/views/styles";

type Props = {
  links: Link[];
};

export default function DndLinkListSection({ links }: Props) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor)
  );

  return (
    <LinkList container rowSpacing={2} columnSpacing={2}>
      <DndContext
        onDragEnd={(e) => console.log(e)}
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToWindowEdges]}
      >
        {links && (
          <SortableContext items={links} strategy={rectSortingStrategy}>
            {links.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </SortableContext>
        )}
      </DndContext>
    </LinkList>
  );
}
