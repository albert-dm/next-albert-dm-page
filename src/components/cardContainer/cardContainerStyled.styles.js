import styled from 'styled-components';
import { colors } from '../theme';

export const CardContainerStyled = styled.div`

   
    background-color:${colors.terminal};
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
      flex-direction: row;
      flex-wrap: wrap;
      justify-content:space-around;
      align-items:center;
      height:auto;
     
   
      
    }
  `;