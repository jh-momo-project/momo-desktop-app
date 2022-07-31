import styled, { css } from "styled-components";

export interface BoxProps {
  width?: number;
  height?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  p?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  m?: string;
}

export const BoxStyle = css<BoxProps>`
  width: ${(props) => (props?.width ? props.width + "px" : "100%")};
  height: ${(props) => (props?.height ? props.height + "px" : "auto")};
  padding-top: ${(props) => (props?.pt ? props.pt + "px" : 0)};
  padding-bottom: ${(props) => (props?.pb ? props.pb + "px" : 0)};
  padding-left: ${(props) => (props?.pl ? props.pl + "px" : 0)};
  padding-right: ${(props) => (props?.pr ? props.pr + "px" : 0)};
  ${(props) => props?.p && { padding: props.p }};
  margin-top: ${(props) => (props?.mt ? props.mt + "px" : 0)};
  margin-bottom: ${(props) => (props?.mb ? props.mb + "px" : 0)};
  margin-left: ${(props) => (props?.ml ? props.ml + "px" : 0)};
  margin-right: ${(props) => (props?.mr ? props.mr + "px" : 0)};
  ${(props) => props?.m && { padding: props.m }};
`;

const Box = styled.div`
  ${BoxStyle}
`;

export default Box;
