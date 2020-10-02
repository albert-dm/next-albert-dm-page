import { Post } from '../../components/post';
import { posts } from '../../../getAllPosts';
import { Container } from '../../components/container';
import { PostListWrapper } from './list.styled';

export default function IndexPage() {
  return (
    <Container>
      <PostListWrapper>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </PostListWrapper>
    </Container>
  );
}