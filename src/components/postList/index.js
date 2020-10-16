
import { Post } from '../../components/post';
import { posts } from '../../../getAllPosts';
import { PostListWrapper } from './postList.styled';


const  PostList = () => { 
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
