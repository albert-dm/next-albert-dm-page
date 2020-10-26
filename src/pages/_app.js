import { object } from 'prop-types';
import React from 'react';
import Footer from '../components/footer';
import {Header} from '../components/header';




// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>;
}

MyApp.propTypes = {
  pageProps: object,
};

export default MyApp;