/**
 * _document.tsx : 모든 페이지 <head>, <body> 내에서 공통적으로 커스텀이 필요한 경우 사용
 */

// ----------------------------------------------------------------------

import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="jihyun" />
          <meta name="description" content="momo project" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
