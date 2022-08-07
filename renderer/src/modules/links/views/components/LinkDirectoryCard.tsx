import React from "react";
// @mui
import { ListItem } from "@mui/material";
// components
import Text from "@components/Text";
// theme
import palette from "@theme/palette";

interface ILinkDirectoryCard {
  item: {
    id: number;
    title: string;
  };
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export default function LinkDirectoryCard({ item, onClick }: ILinkDirectoryCard) {
  return (
    <ListItem
      key={item.id}
      onClick={onClick}
      sx={{
        height: 48,
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 150ms ease-in-out",
        "&:hover": { bgcolor: `${palette.primary.light}30` },
      }}
    >
      <Text size={14} weight="bold" color="grey.800">
        {item.title}
      </Text>
    </ListItem>
  );
}
