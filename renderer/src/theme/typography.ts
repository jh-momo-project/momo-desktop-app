/**
 * MUI typography theme 적용
 */

import { pxToRem } from "../utils/fontUtils";

const MAIN_FONT = "SUIT";

const getTypography = (size: number, height: number) => {
  const commonStyle = {
    fontSize: pxToRem(size),
    lineHeight: height / size,
    letterSpacing: "-0.2px",
  };
  return {
    extraBold: { ...commonStyle, fontWeight: 800 },
    bold: { ...commonStyle, fontWeight: 700 },
    medium: { ...commonStyle, fontWeight: 500 },
    regular: { ...commonStyle, fontWeight: 400 },
  };
};

export const textStyle = {
  22: getTypography(22, 32),
  20: getTypography(20, 28),
  18: getTypography(18, 26),
  16: getTypography(16, 23),
  15: getTypography(15, 21),
  14: getTypography(14, 20),
  13: getTypography(13, 18),
  12: getTypography(12, 17),
  11: getTypography(11, 16),
  10: getTypography(10, 16),
};

const typography = {
  fontFamily: MAIN_FONT,
  button: {
    ...textStyle[13].bold,
    textTransform: "capitalize",
  },
} as const;

export default typography;
