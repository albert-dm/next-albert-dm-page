
import styled from 'styled-components';
import { colors } from '../theme';


export const PostStyled = styled.nav`
 
 .details{
      display: flex;
      flex-flow: column wrap;
      align-items:center;
      justify-content: space-between;
      margin-bottom: 3rem;
    a{
      text-decoration:none; 
      color: ${colors.secondary};

    }
 

  }
`;

