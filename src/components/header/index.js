import React from 'react';
import { ContentWrapper } from '../contentWrapper';
import { HeaderStyled } from './headerStyled.styles';

const Header = () => {
  return (
    <HeaderStyled>
      <ContentWrapper>
        <h1>
          {'>'}albert-dm.dev
        </h1>
      </ContentWrapper>
    </HeaderStyled>
  );
};

export default Header;
