import React from "react";
import { HeaderStyled } from './headerStyled.styles';
import MyImage from './profilePhoto'

const Header = (props) => {
  return (
    <HeaderStyled>
      <img src="/profile.jpg" alt="my image" className="profilePhoto"/>
      <div className="profileText">
        <h1 className="title">>DEV</h1>
        <p className="description">Software Developer and Automation Engineer Building applications that suits your business Web, Mobile, Desktop and even IoT</p>
        <p className="descriptionTwo">Any buisiness can and needs to be digital and in the web. If you want to talk about it, fell free to contact me!</p>
      </div>
    </HeaderStyled>
  );
};

export default Header;
