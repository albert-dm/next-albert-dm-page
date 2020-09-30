import { Post } from '../../components/post';
import { posts } from '../../../getAllPosts';
import { PostStyled} from './list.styled';

export default function IndexPage() {
  return (
    <PostStyled>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </PostStyled>
  );
}