import { Stack } from "@mui/material";
import Text from "@components/Text";

const LayoutNavbar = () => {
  return (
    <Stack component="aside" alignItems="center" sx={{ width: 80, height: "100vh", bgcolor: "primary.main" }}>
      <Stack width={80} height={60} justifyContent="center" alignItems="center">
        <Text size={18} weight="bold" color="white">
          MOMO
        </Text>
      </Stack>
    </Stack>
  );
};

export default LayoutNavbar;
