import styled from "styled-components";
import { BoxProps } from "@components/Box";

export interface ButtonProps extends BoxProps {
  bgcolor?: string;
  fontcolor?: string;
  size?: number;
  weight?: number;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => (props?.width ? props.width + "px" : "auto")};
  height: ${(props) => (props?.height ? props.height + "px" : "auto")};
  padding-top: ${(props) => (props?.pt ? props.pt + "px" : "4px")};
  padding-bottom: ${(props) => (props?.pb ? props.pb + "px" : "4px")};
  padding-left: ${(props) => (props?.pl ? props.pl + "px" : "4px")};
  padding-right: ${(props) => (props?.pr ? props.pr + "px" : "4px")};
  ${(props) => props?.p && { padding: props.p }};
  margin-top: ${(props) => (props?.mt ? props.mt + "px" : "4px")};
  margin-bottom: ${(props) => (props?.mb ? props.mb + "px" : "4px")};
  margin-left: ${(props) => (props?.ml ? props.ml + "px" : "4px")};
  margin-right: ${(props) => (props?.mr ? props.mr + "px" : "4px")};
  ${(props) => props?.m && { padding: props.m }};
  color: ${(props) => (props?.fontcolor ? props.fontcolor : props.theme.palette.grey.black)};
  background-color: ${(props) => (props?.bgcolor ? props.bgcolor : "inheit")};
  font-size: ${(props) => (props?.size ? props.size + "px" : "14px")};
  font-weight: ${(props) => (props?.weight ? props.weight : 500)};

  &:hover {
    background-color: ${(props) => props.theme.palette.grey[200]};
    border-radius: 50%;
  }
`;

export default Button;
