
import styled from 'styled-components';
import { colors } from '../theme';

export const NavBarStyled= styled.nav`

  display: flex;
  padding: 15px;
  background: ${colors.white};
  a {
    padding: 0 15px;
    color: ${colors.primary};
    text-decoration: none;

  }

  a:hover{
    color: ${colors.secondary};

  }
`;
  
