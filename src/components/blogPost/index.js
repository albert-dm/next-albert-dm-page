import { Container } from '../container';
import { BlogPostWrapper } from './blogPost.styles';


export default function BlogPost({ children, meta}) {
  return (
    <Container>
      <BlogPostWrapper>
        <h2>{meta.title}</h2>
        <span>{meta.date}</span>
        <article>{children}</article>
      </BlogPostWrapper>
    </Container>
  );
}