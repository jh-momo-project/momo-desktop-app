import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // palette
    palette: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      grey: {
        white: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
        black: string;
      };
    };

    // typography
    typography: {
      mainFont: string;
      // 이후 추가 (title, button 등)
    };

    // shadows
    shadows: {
      z1: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
    };

    // breakpoint
    breakpoint: {
      // @media screen and (min-width: 768px) 형태
      mobile: string;
      tablet: string;
    };
  }
}
