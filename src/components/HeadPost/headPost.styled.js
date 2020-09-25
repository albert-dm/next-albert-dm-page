import styled from 'styled-components';
import { colors } from '../theme';

export const HeadPostStyled = styled.div`
  
  display: flex;
  flex-flow: column wrap;
  align-items:center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${colors.secondary}

  }

  p{
    display: flex;
    color: ${colors.gray}

  }
  span{
    display:flex;
    color: ${colors.gray}
 


  }

`;
  

