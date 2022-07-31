import styled from "styled-components";
import { BoxProps, BoxStyle } from "../Box";

type JustifyContentTypes =
  | "start"
  | "end"
  | "center"
  | "around"
  | "between"
  | "evenly";

function getJustifyContent(jc: JustifyContentTypes) {
  switch (jc) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "around":
      return "space-around";
    case "between":
      return "space-between";
    case "evenly":
      return "space-evenly";
    case "center":
    default:
      return "center";
  }
}

type AlignItemsTypes = "start" | "end" | "center";

function getAlignItems(ai: AlignItemsTypes) {
  switch (ai) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
    default:
      "center";
  }
}

export interface StackProps extends BoxProps {
  direction?: "row" | "column";
  jc?: JustifyContentTypes;
  ai?: AlignItemsTypes;
  gap?: number;
}

const Stack = styled.div<StackProps>`
  ${BoxStyle};
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  justify-content: ${(props) =>
    props?.jc ? getJustifyContent(props.jc) : "center"};
  align-items: ${(props) => (props?.ai ? getAlignItems(props.ai) : "center")};
  gap: ${(props) => (props?.gap ? props.gap + "px" : 0)};
`;

export default Stack;
