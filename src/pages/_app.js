import { object, ReactComponentLike } from 'prop-types';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
  </>;
}

MyApp.propTypes = {
  Component: ReactComponentLike,
  pageProps: object,
};

export default MyApp;