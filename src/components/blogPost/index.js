import { HeadPost } from '../HeadPost';


export default function BlogPost({ children, meta}) {
  return (
    <>
      <HeadPost meta={meta}/>
      <article>{children}</article>
    </>
  );
}