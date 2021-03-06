import React from 'react';
import { ContentWrapper } from '../contentWrapper';
import { HeaderStyled } from './header.styled';
import NavBar from '../navBar';

export const Header = () => {
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