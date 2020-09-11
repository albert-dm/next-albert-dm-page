import styled from 'styled-components';
import { colors } from '../../theme'

export const CardContainerStyled = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");

    background-color:${colors.terminal};
    border-radius:10px;
    width: 100%;
    margin:auto;
    .title {
      color:${colors.white};
      font-family: 'Rubik';
      font-weight:900;
      font-size: 24px;
      padding:40px;
    }
    .cards{
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:space-around;
      align-items:center;
      height:auto;
      padding:50px;
    }
  `;