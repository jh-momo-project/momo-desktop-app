/**
 * MUI ThemeProvider
 * - mui 테마 설정 root
 *
 * 참고 : https://mui.com/material-ui/customization/default-theme/#main-content
 */

// ----------------------------------------------------------------------

import { ReactNode, useMemo } from "react";
import { createTheme, ThemeOptions, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";
import ComponentsOverrides from "./override";

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const themeOption: ThemeOptions = useMemo(
    () => ({
      palette: palette,
      customShadows: customShadows,
      shadows: shadows,
      typography,
    }),
    []
  );
  const theme = createTheme(themeOption);

  theme.components = ComponentsOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
