import { object, ReactComponentLike } from 'prop-types';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';




function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>;
}

MyApp.propTypes = {
  Component: ReactComponentLike,
  pageProps: object,
};

export default MyApp;