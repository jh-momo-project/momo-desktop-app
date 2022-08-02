/**
 * MUI color theme 적용
 */

export type ColorSchema = "primary" | "secondary" | "info" | "success" | "warning" | "error";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  darker: "#CC7000",
  dark: "#F58700",
  main: "#FF9F29",
  light: "#FFB65C",
  lighter: "#FFC885",
};
const SECONDARY = {
  darker: "#0A1F12",
  dark: "#143D25",
  main: "#1A4D2E",
  light: "#246B40",
  lighter: "#33995C",
};

const INFO = {
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
};

const SUCCESS = {
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
};

const WARNING = {
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
};
const ERROR = {
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
};

const GREY = {
  white: "#fff",
  100: "#f8f9fa",
  200: "#f1f3f5",
  300: "#e9ecef",
  400: "#ced4da",
  500: "#adb5bd",
  600: "#868e96",
  700: "#495057",
  800: "#343a40",
  900: "#212529",
  1000: "#191c1f",
  black: "#000",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: "#fff" },
  warning: { ...WARNING, contrastText: "#fff" },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY["black"],
      secondary: GREY[1000],
      disabled: GREY[500],
      background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
    },
  },
} as const;

export default palette;
