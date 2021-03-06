import React from 'react';
import { BioSectionStyled } from './bioSection.styles';
import  Linkedin from '../icons/linkedin';
import  Github from '../icons/github';
import  Email from '../icons/email';
import { Container } from '../container';



const BioSection = () => {
  return (
    <Container>
      <BioSectionStyled>
        <img src="/profile.jpg"  className="profilePhoto"  alt = "Foto de Desenvolvedor de Software Albert Dias"/>
        <div className="profileText">
          <h2>{'>'}dev</h2>
          <p>Software Developer and Automation Engineer</p>
          <p>Building applications that suits your business</p>
          <p>Web, Mobile, Desktop and even IoT</p>
          <p>Any buisiness can and needs to be digital and in the web. If you want to talk about it, fell free to contact me!</p>
          <div className="socialButtons">
            <a href="https://www.linkedin.com/in/albert-moreira-62b9272b/">
              <Linkedin size="50" alt = "Icone da midia social Linkedin" />
            </a>
            <a href="https://github.com/albert-dm">
              <Github size="50" alt = "Icone da plataforma de versionamento de codigo Github"/>
            </a>
            <a href="mailto:inbox@albert-dm.dev">
              <Email size="50" alt = "Icone de e-mail"/>
            </a>
          </div>
        </div>
      </BioSectionStyled>
    </Container>
  );
};

export default BioSection;
