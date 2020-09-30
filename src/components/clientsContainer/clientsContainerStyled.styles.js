import styled from 'styled-components';
import { colors } from '../theme';

export const ClientsContainerStyled = styled.div`

   
    background-color:${colors.white};
    width: 100%;
    margin:auto;
   
    .title {
      color:${colors.primary};
      font-family: 'Rubik';
      font-weight:900;
      font-size: 24px;
      padding:50px;
    }
    .banners{
      display:flex;
      flex-direction: row;
      justify-content:space-around;
      align-items:center;
      height:auto;
      padding:50px;
      margin-bottom: 20px;
    }
  `;