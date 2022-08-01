import Box from "@components/Box";
import styled from "styled-components";
import { LAYOUT_SIZE } from "./constants/layoutSize";

export const LayoutContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: ${LAYOUT_SIZE.HEADER_HEIGHT} 1fr;
  grid-template-rows: ${LAYOUT_SIZE.NAV_WIDTH} 1fr;
`;

export const MainContainer = styled(Box)`
  padding: 24px;
`;
