
import styled from 'styled-components';
import { colors } from '../theme';


export const PostStyled = styled.div `
    width:30%;
    margin-bottom: 3em;
    margin-left:2em;
`;

export const LinkStyled = styled.a`

  color: ${colors.grayDark};
  text-decoration:none;

  :hover{
      color: ${colors.terminal};
  }

`;







