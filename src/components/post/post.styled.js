
import styled from 'styled-components';
import { colors } from '../theme';


export const PostStyled = styled.div `
    width:30%;
    margin-bottom: 3em;
    margin-left:2em;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
`;

export const LinkStyled = styled.a`

  color: ${colors.grayDark};
  font-size: 14px;
  text-decoration:none;

  :hover{
      color: ${colors.terminal};
  }

`;







