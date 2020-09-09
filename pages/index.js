import Head from 'next/head';
import Rectangle from './components/rectangle'
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
        
        <Rectangle/>
    </>
  );
}