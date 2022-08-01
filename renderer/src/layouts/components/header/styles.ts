import styled from "styled-components";
import Stack from "@components/Stack";
import { LAYOUT_SIZE } from "../../constants/layoutSize";

export const HeaderContainer = styled(Stack)`
  /* height: ${LAYOUT_SIZE.HEADER_HEIGHT}; */
  height: 100%;
  width: 100%;
  padding: 0 24px;
  box-sizing: content-box;
`;
