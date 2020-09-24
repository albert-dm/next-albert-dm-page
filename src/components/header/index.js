import React from 'react';
import { ContentWrapper } from '../contentWrapper';
import { HeaderStyled } from './headerStyled.styles';
import NavBar from '../navBar';



const Header = () => {
  return (
    <HeaderStyled>
      <ContentWrapper>
        <h1>
          {'>'}albert-dm.dev
        </h1>
        <NavBar/>
      </ContentWrapper>
    </HeaderStyled>
  );
};

export default Header;
