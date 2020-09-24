
import styled from 'styled-components';
import { colors } from '../theme';

export const NavBarStyled= styled.nav`
  padding: 15px;
  display: flex;
  background: ${colors.white};
  a {
    padding: 0 15px;
    color: ${colors.primary};
    text-decoration: none;

  }

  a:hover{
    text-decoration: underline;

  }
`;
  
