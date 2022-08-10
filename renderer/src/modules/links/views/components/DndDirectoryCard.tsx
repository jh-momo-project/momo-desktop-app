/**
 * @component DndDirectoryCard
 * - 링크묶음(디렉토리) 리스트 아이템
 * - Drag & Drop 가능
 */

import React from "react";
// @mui
import { ListItem } from "@mui/material";
// @dnd-kit
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// components
import Text from "@components/Text";
// theme
import palette from "@theme/palette";
import LinkCategory from "@modules/links/models/LinkCategory";

type Props = {
  isActive?: boolean;
  item: LinkCategory;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export default function DndDirectoryCard({ isActive, item, onClick }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: "white",
  };
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <ListItem
        key={item.id}
        onClick={onClick}
        sx={{
          height: 48,
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 150ms ease-in-out",
          bgcolor: isActive ? `${palette.primary.light}40` : "common.white",
          "&:hover": { bgcolor: isActive ? `${palette.primary.light}40` : `${palette.primary.light}15` },
        }}
      >
        <Text size={14} weight="bold" color="grey.800">
          {item.title}
        </Text>
      </ListItem>
    </div>
  );
}
