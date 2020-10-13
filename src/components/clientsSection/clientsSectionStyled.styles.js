import styled from 'styled-components';
import { colors } from '../theme';
import { ContentWrapper } from '../contentWrapper';


export const ClientsSectionStyled = styled(ContentWrapper)`

   
  background-color:${colors.white};
   
    h2 {
    padding: 40px 0 30px 0;
  }
    ul{
      list-style-type: none;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      align-itens:center;  
      margin-bottom: 40px;
    }

    li{
      margin:auto;
    }

    @media only screen and (max-width: 600px) {
      ul{
        flex-direction: column;
       
      }


    }
  }
    
  `;

