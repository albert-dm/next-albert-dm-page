
import { Post } from '../../components/post';
import { posts } from '../../../getAllPosts';
import { PostListWrapper } from './postList.styled';


const  PostList = () => { 
  return (
    <PostListWrapper>
      {posts.length > 0  ? posts.map((post) => (
        <Post key={post.link} post={post} />
      ))
        : <h1>Hello, you will see nice posts here soon :)</h1>}
    </PostListWrapper>
  );
};

export default PostList;
