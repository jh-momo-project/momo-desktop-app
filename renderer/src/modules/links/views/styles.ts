// @mui
import { Box, List, Stack, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
// constants
import LINKS_SIZE from "@modules/links/constants/size";

export const ViewContainer = styled(Stack)((props) => ({
  maxHeight: `calc(100vh - ${LINKS_SIZE.HEADER_HEIGHT}px)`,
  overflow: "hidden",
}));

export const DirectoryContainer = styled(Box)(({ theme }) => ({
  width: `${LINKS_SIZE.LIST_MIN_WIDTH}px`,
  height: `calc(100vh - ${LINKS_SIZE.HEADER_HEIGHT}px)`,
  borderRight: "2px solid",
  borderColor: theme.palette.primary.main,
}));

export const DirectoryList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  padding: "10px",
}));

export const LinkList = styled(Grid2)({
  width: "100%",
  height: "auto",
  margin: "0 auto 0 auto",
  padding: 20,
  overflow: "hidden",
});
