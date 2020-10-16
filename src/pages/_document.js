import React from 'react';
import Document, {Html, Head, Main, NextScript } from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  h1 {
    font-family: 'Coda', cursive;
    font-weight: 800;
    font-size: 40px;
  }
  h2 {
    font-family: 'Coda', cursive;
    font-weight: 800;
    font-size: 24px;
  }
  h3 {
    font-family: 'Coda', cursive;
    font-weight: 800;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    padding: 5px 0;
  }
  body {
    padding-top: 150px;

   
  }
  };
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <GlobalStyle/>
          <App {...props} />
        </>
      ),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }


  render() {
    return (
      <Html>
        <Head>    
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}



