import styled from 'styled-components';
import { colors } from '../theme';

export const FooterStyled = styled.footer`

  background-color: ${colors.terminal};
  color:${colors.white};
  width: 100%;
  height: 150px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  ul{
      list-style:none;
    }



}
    
`;
  