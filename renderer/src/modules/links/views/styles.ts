// @mui
import { Grid, List, Stack, styled } from "@mui/material";
// constants
import LINKS_SIZE from "@modules/links/constants/size";

export const ViewContainer = styled(Stack)((props) => ({
  maxHeight: `calc(100vh - ${LINKS_SIZE.HEADER_HEIGHT}px)`,
  overflow: "hidden",
}));

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

export const LinkList = styled(Grid)({
  width: "100%",
  margin: "0 auto 0 auto",
  padding: 20,
  overflow: "auto",
});
