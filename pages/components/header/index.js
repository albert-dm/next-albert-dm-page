import React from "react";
import { HeaderStyled } from "./headerStyled.styles";

const Header = (props) => {
  return (
    <HeaderStyled>
      <div className="title">
        {'>'}albert-dm.dev
      </div>
    </HeaderStyled>
  );
};

export default Header;
