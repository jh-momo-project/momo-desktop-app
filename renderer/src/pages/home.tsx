import { Copy } from "@components/Icons";
import React from "react";
import styled from "styled-components";
import Text from "../components/Text";

function Home() {
  return (
    <React.Fragment>
      <button>asd</button>
      <a href="/">adsf</a>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
      <dl>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </dl>

      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>

      <Copy />

      <Title>제목입니다</Title>
      <Text size={18} weight="bold">
        하하하
      </Text>
    </React.Fragment>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary};
`;

export default Home;
