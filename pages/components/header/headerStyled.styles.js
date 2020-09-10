import styled from 'styled-components';
import { colors } from '../../theme'

export const HeaderStyled = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");

    border-bottom-color:${colors.secondary};
    border-bottom-style:solid;
    .title {
      color:${colors.primary};
      font-family: 'Rubik';
      font-weight:900;
      font-size: 38px;
      padding-left:10%;
      padding-bottom:10px;
      padding-top:10px;
    }
  `;