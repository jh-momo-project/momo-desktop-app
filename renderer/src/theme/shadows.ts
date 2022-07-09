/**
 * MUI shadow theme 적용
 */

import { Shadows } from "@mui/material/styles/shadows";

interface CustomShadowOptions {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

const LIGHT_SHADOW_COLOR = "rgba(145, 158, 171, 0.12)";

export const lightShadows = {
  z1: `0 1px 2px 0 ${LIGHT_SHADOW_COLOR}`,
  z8: `0 8px 16px 0 ${LIGHT_SHADOW_COLOR}`,
  z12: `0 12px 24px -4px ${LIGHT_SHADOW_COLOR}`,
  z16: `0 16px 32px -4px ${LIGHT_SHADOW_COLOR}`,
  z20: `0 20px 40px -4px ${LIGHT_SHADOW_COLOR}`,
  z24: `0 24px 48px 0 ${LIGHT_SHADOW_COLOR}`,
};

const shadows: { light: any } = {
  light: lightShadows,
};

export default shadows;
