import { useState } from "react";
// @mui
import { Box, Grid } from "@mui/material";
// service
import useGetLinks from "../services/hooks/useGetLinks";
import useGetCategories from "../services/hooks/useGetCategories";
// view
import { DirectoryList, LinkList, ViewContainer } from "@modules/links/views/styles";
// components
import LinkDirectoryCard from "@modules/links/views/components/LinkDirectoryCard";
import LinkMainHeader from "@modules/links/views/components/LinkMainHeader";
import LinkCard from "@modules/links/views/components/LinkCard";

// dnd-kit
import {
  DndContext,
  useDroppable,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

export default function LinkMainView() {
  const { data: categories } = useGetCategories();
  const [currentId, setCurrentDirectory] = useState(categories[0].id);
  const { isLoading, data: links } = useGetLinks({ categoryId: currentId });

  // dnd-kit
  const { isOver, setNodeRef } = useDroppable({ id: "linksDroppable" });
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor)
  );

  return (
    <>
      <LinkMainHeader />
      <ViewContainer direction="row" sx={{ overflowY: "hidden", msOverflowY: "hidden" }}>
        <DirectoryList>
          {categories.map((item) => (
            <LinkDirectoryCard
              key={item.id}
              item={item}
              isActive={currentId === item.id}
              onClick={(e) => setCurrentDirectory(item.id)}
            />
          ))}
        </DirectoryList>
        <Box sx={{ width: "100%", height: "100%" }}>
          <LinkList container spacing={2} ref={setNodeRef}>
            <DndContext onDragEnd={(e) => console.log(e)} sensors={sensors} collisionDetection={closestCenter}>
              {links && (
                <SortableContext items={links} strategy={rectSortingStrategy}>
                  {!isLoading &&
                    links.map((link) => (
                      <Grid item key={link.id} xs={12} sm={6} md={4} lg={3} xl={2} sx={{ flexGrow: 0 }}>
                        <LinkCard link={link} />
                      </Grid>
                    ))}
                </SortableContext>
              )}
            </DndContext>
          </LinkList>
        </Box>
      </ViewContainer>
    </>
  );
}
