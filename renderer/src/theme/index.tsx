/**
 * MUI ThemeProvider
 * - mui 테마 설정 root
 *
 * 참고 : https://mui.com/material-ui/customization/default-theme/#main-content
 */

// ----------------------------------------------------------------------

import { ReactNode, useMemo } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const themeOption: ThemeOptions = useMemo(
    () => ({
      palette: palette.light,
    }),
    []
  );
  const theme = createTheme(themeOption);

  // ! 컴포넌트 디자인 오버라이드 가능
  // theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
