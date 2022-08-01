import Stack from "@components/Stack";
import styled from "styled-components";
import { LAYOUT_SIZE } from "../../constants/layoutSize";

export const NavContainer = styled(Stack)`
  /* width: ${LAYOUT_SIZE.NAV_WIDTH}; */
  /* min-width: ${LAYOUT_SIZE.NAV_WIDTH}; */
  width: 100%;
  height: 100%;
  box-sizing: content-box;
`;
