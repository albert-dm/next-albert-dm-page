import styled from 'styled-components';
import { colors } from '../theme';

export const CardStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 100px;
  border-style: solid;
  border-color: ${colors.secondary};
  border-width: 4px;
  border-top-width: 35px;
  height: 420px;
  margin-top: 16px;
  padding: 15px;
  color: ${colors.primary};
  background-color: ${colors.white};
  border-radius: 20px;

  .imgWrapper {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 250px;
  }
  .content {
    h3 {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 600px) {
    width: auto;
    margin: 50px 16px;
  }
 

`;