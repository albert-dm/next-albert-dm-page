/* eslint-disable react/prop-types */
import { Container } from '../container';
import { BlogPostWrapper } from './blogPost.styles';
import Linkedin from '../icons/linkedin';
import Github from '../icons/github';
import Email from '../icons/email';
import {Head} from '../head';

export default function BlogPost({ children, meta }) {
  return (
    <Container>
      <Head
        pageTitle ={`${meta.title} - Blog @ albert-dm.dev`} 
        description ={meta.description}
        siteName = "albert-dm.dev" 
      />
      <BlogPostWrapper>
        <h2>{meta.title}</h2>
        <p>{meta.date}</p>
        <br />
        <article>{children}</article>
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/albert-moreira-62b9272b/">
            <Linkedin size="50" alt="Icone da midia social Linkedin" />
          </a>
          <a href="https://github.com/albert-dm">
            <Github
              size="50"
              alt="Icone da plataforma de versionamento de codigo Github"
            />
          </a>
          <a href="mailto:inbox@albert-dm.dev">
            <Email size="50" alt="Icone de e-mail" />
          </a>
        </div>
      </BlogPostWrapper>
    </Container>
  );
}
