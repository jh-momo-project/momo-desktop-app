// @mui
import { Stack } from "@mui/material";
// components
import Text from "@components/Text";
import LAYOUT_SIZE from "@layouts/constants/size";

const LayoutNavbar = () => {
  return (
    <Stack
      component="aside"
      alignItems="center"
      sx={{ width: LAYOUT_SIZE.NAV_WIDTH, height: "100vh", bgcolor: "primary.main" }}
    >
      <Stack width={LAYOUT_SIZE.NAV_WIDTH} height={60} justifyContent="center" alignItems="center">
        <Text size={18} weight="bold" color="white">
          MOMO
        </Text>
      </Stack>
    </Stack>
  );
};

export default LayoutNavbar;
