import { css } from "styled-components";
import { pxToRem } from "@utils/fontUtils";

const getTypography = (size: number, height: number) => {
  const commonStyle = css`
    font-size: ${pxToRem(size)};
    line-height: ${height / size};
    letter-spacing: -0.2px;
  `;
  return {
    extraBold: css`
      ${commonStyle};
      font-weight: 800;
    `,
    bold: css`
      ${commonStyle};
      font-weight: 700;
    `,
    medium: css`
      ${commonStyle};
      font-weight: 500;
    `,
    regular: `
      ${commonStyle};
      font-weight: 400;
    `,
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
  mainFont: "SUIT",
};

export default typography;
