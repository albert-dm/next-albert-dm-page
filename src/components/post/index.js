
import { HeadPost } from '../headPost';
import {PostStyled} from './post.styled';
import {LinkStyled} from './post.styled';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return(
    <PostStyled>
      <HeadPost meta={meta} />
      <LinkStyled href={'/blog' + link} >
        Read more &rarr;
      </LinkStyled>
    </PostStyled>  
  );
}; 



