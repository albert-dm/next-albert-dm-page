import React from "react";
import { BodyStyled } from './bodyStyled.styles';
import  Linkedin from '../icons/linkedin';
import  Github from '../icons/github';
import  Email from '../icons/email';

const Header = (props) => {
  return (
    <BodyStyled>
      <img src="/profile.jpg" alt="my image" className="profilePhoto" />
      <div className="profileText">
        <h1 className="title">{'>'}DEV</h1>
        <p className="description">Software Developer and Automation Engineer Building applications that suits your business Web, Mobile, Desktop and even IoT</p>
        <p className="descriptionTwo">Any buisiness can and needs to be digital and in the web. If you want to talk about it, fell free to contact me!</p>
        <div className="socialButtons">
          <a href="https://www.linkedin.com/in/albert-moreira-62b9272b/">
            <Linkedin/>
          </a>
          <a href="https://github.com/albert-dm">
            <Github/>
          </a>
          <a href="mailto:inbox@albert-dm.dev">
            <Email/>
          </a>
        </div>
      </div>
    </BodyStyled>
  );
};

export default Header;
