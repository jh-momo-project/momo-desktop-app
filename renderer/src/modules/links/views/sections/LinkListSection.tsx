import { Grid } from "@mui/material";

import LinkCard from "@modules/links/views/components/LinkCard";
// dnd-kit
import { DndContext, useSensors, useSensor, MouseSensor, TouchSensor, closestCenter } from "@dnd-kit/core";
import { LinkList } from "@modules/links/views/styles";

import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Link from "@modules/links/models/Link";

type Props = {
  links: Link[];
};

export default function LinkListSection({ links }: Props) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor)
  );

  return (
    <LinkList container spacing={2}>
      <DndContext onDragEnd={(e) => console.log(e)} sensors={sensors} collisionDetection={closestCenter}>
        {links && (
          <SortableContext items={links} strategy={rectSortingStrategy}>
            {links.map((link) => (
              <Grid item key={link.id} xs={12} sm={6} md={4} lg={3} xl={2} sx={{ flexGrow: 0 }}>
                <LinkCard link={link} />
              </Grid>
            ))}
          </SortableContext>
        )}
      </DndContext>
    </LinkList>
  );
}
