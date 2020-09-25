import Link from 'next/link';
import { HeadPost } from '../HeadPost';
import {PostStyled} from './post.styled';



export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return(
    <PostStyled >
      <HeadPost meta={meta} />
      <div className = "details">
        <Link href={'/blog' + link} >
          <a>Read more &rarr;</a>
        </Link>
      </div>
    
    </PostStyled >
     
   
  );


}; 



