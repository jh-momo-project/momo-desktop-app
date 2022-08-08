/**
 * MUI color theme 적용
 */

export type ColorSchema = "primary" | "secondary" | "info" | "success" | "warning" | "error";

// SETUP COLORS
const PRIMARY = {
  dark: "#1b1b1b",
  main: "#424242",
  light: "#6d6d6d",
};
// const PRIMARY = {
//   dark: "#ae414e",
//   main: "#e4717a",
//   light: "#ffa2a9",
// };
const SECONDARY = {
  dark: "#004851",
  main: "#36747d",
  light: "#66a3ac",
};

const INFO = {
  light: "#6ec0ff",
  main: "#1890FF",
  dark: "#0063cb",
};

const SUCCESS = {
  light: "#8dff62",
  main: "#54D62C",
  dark: "#00a300",
};

const WARNING = {
  light: "#fff350",
  main: "#FFC107",
  dark: "#c79100",
};
const ERROR = {
  light: "#ff7e6e",
  main: "#FF4842",
  dark: "#c40019",
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
  primary: { ...PRIMARY, contrastText: "#000" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#000" },
  success: { ...SUCCESS, contrastText: "#000" },
  warning: { ...WARNING, contrastText: "#000" },
  error: { ...ERROR, contrastText: "#000" },
  grey: GREY,
};

const palette = {
  ...COMMON,
  mode: "light",
  text: {
    primary: GREY["black"],
    secondary: GREY[1000],
    disabled: GREY[500],
    background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
  },
} as const;

export default palette;
