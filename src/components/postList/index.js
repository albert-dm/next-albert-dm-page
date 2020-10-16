
import { Post } from '../../components/post';
import { posts } from '../../../getAllPosts';
import { PostListWrapper } from './posList.styled';

<PostListWrapper>
  {posts.map((post) => (
    <Post key={post.link} post={post} />
  ))}
</PostListWrapper>;