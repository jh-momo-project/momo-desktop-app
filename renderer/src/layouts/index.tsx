import { Box, Stack } from "@mui/material";
import LayoutNavbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <Stack direction="row">
      <LayoutNavbar />
      <Box component="main" id="main-container" sx={{ width: "100%", height: "100vh" }}>
        {children}
      </Box>
    </Stack>
  );
};

export default Layout;
