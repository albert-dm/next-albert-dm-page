
import { Container } from '../../components/container';
import Head  from '../../components/head';
import PostList from '../../components/postList';

const  IndexPage = () => { 
  return (
    <Container>
      <Head
        pageTitle ="Blog @ albert-dm.dev" 
        description ="I'm Albert, a passionate software developer. Welcome! I'm always willing to exchange ideas"
        siteName = "albert-dm.dev" 
      />
      <PostList/>
     
    </Container>
  );
};

export default IndexPage;


