import styled from 'styled-components';

export const CardContainerStyled = styled.div`  
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;