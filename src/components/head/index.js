import React from 'react';
import NextHead from 'next/head';

export const Head = ({ pageTitle, description ,siteName}) => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

  

    <meta property="og:title" content={pageTitle || ''} key="ogtitle" />
    <meta property="og:description" content={description || ''} key="ogdesc" />
    <meta property="og:site_name" content={siteName || ''} key="ogsitename" />

  

    
  </NextHead>
);
  