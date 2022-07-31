const LIGHT_SHADOW_COLOR = "rgba(145, 158, 171, 0.12)";

const shadows = {
  z1: `0 1px 2px 0 ${LIGHT_SHADOW_COLOR}`,
  z8: `0 8px 16px 0 ${LIGHT_SHADOW_COLOR}`,
  z12: `0 12px 24px -4px ${LIGHT_SHADOW_COLOR}`,
  z16: `0 16px 32px -4px ${LIGHT_SHADOW_COLOR}`,
  z20: `0 20px 40px -4px ${LIGHT_SHADOW_COLOR}`,
  z24: `0 24px 48px 0 ${LIGHT_SHADOW_COLOR}`,
} as const;

export default shadows;
