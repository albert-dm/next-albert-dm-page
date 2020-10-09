import styled from 'styled-components';
import { colors } from '../theme';
import { ContentWrapper } from '../contentWrapper';

export const ClientsSectionStyled = styled(ContentWrapper)`

   
    background-color:${colors.white};
  
   
    h2 {
    padding: 40px 0 30px 0;
  }
    .banners{

      display:flex;
      flex-direction: row;
      justify-content:space-between;
      align-itens:center;
      padding:50px;
      margin-bottom: 20px;
     
    }

  `;

