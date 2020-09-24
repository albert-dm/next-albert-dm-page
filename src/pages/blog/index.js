import Link from 'next/link';
import { posts } from '../../../getAllPosts';

const BlogIndex = () => {
  return <div>
    {
      posts.map(post => <Link key={post.link} href={`/blog${post.link}`} >{JSON.stringify(post)}</Link>)
    }
  </div>;
};

export default BlogIndex;