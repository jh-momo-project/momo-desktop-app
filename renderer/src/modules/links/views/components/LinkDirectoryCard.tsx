import React from "react";
// @mui
import { ListItem } from "@mui/material";
// components
import Text from "@components/Text";
// theme
import palette from "@theme/palette";
import LinkCategory from "@modules/links/models/LinkCategory";

interface ILinkDirectoryCard {
  isActive?: boolean;
  item: LinkCategory;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default function LinkDirectoryCard({ isActive, item, onClick }: ILinkDirectoryCard) {
  return (
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
  );
}
