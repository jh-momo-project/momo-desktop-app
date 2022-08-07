// @mui
import { Box, List, styled } from "@mui/material";
// modules
import LINKS_SIZE from "@modules/links/constants/size";

export const DirectoryList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  width: LINKS_SIZE.LIST_MIN_WIDTH,
  height: `calc(100vh - ${LINKS_SIZE.HEADER_HEIGHT}px)`,
  borderRight: "2px solid",
  borderColor: theme.palette.primary.main,
  padding: "10px",
}));

export const LinkList = styled(Box)({
  padding: 20,
});
