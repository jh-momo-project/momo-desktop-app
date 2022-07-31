import styled from "styled-components";
import { textStyle } from "@common/styles/theme/typography";

interface TextProps {
  size: keyof typeof textStyle;
  weight?: "regular" | "medium" | "bold" | "extraBold";
}

const Text = styled.p<TextProps>`
  ${(props) => textStyle[props.size][props.weight || "regular"]}
`;

export default Text;
