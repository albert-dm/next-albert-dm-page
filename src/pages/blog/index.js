
import { Container } from '../../components/container';
import Head  from '../../components/head';
import PostList from '../../components/postList';

const  IndexPage = () => { 
  return (
    <Container>
      <Head
        pageTitle ="Albert Software Developer Blog" 
        description ="Blog to show how I developed all my Home Page"
        siteName = "Albert-dm.dev" 
      />
      <PostList/>
     
    </Container>
  );
};

export default IndexPage;


