import { Post } from '../../components/post';
import { posts } from '../../../getAllPosts';
import { Container } from '../../components/container';
import { PostListWrapper } from './list.styled';
import Head  from '../../components/head';

export default function IndexPage() {
  return (
    <Container>
      <Head
        pageTitle ="Albert Software Developer Blog" 
        description ="Blog to show how I developed all my Home Page"
        siteName = "Albert-dm.dev" 
      />
      <PostListWrapper>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </PostListWrapper>
    </Container>
  );
}