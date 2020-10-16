import React from 'react';
import NextHead from 'next/head';

const Head = ({ pageTitle, description ,siteName}) => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

  

    <meta property="og:title" content={pageTitle || ''} key="ogtitle" />
    <meta property="og:description" content={description || ''} key="ogdesc" />
    <meta property="og:site_name" content={siteName || ''} key="ogsitename" />

  

    <link href="https://fonts.googleapis.com/css2?family=Coda:wght@400;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  </NextHead>
);

  
export default Head;
  