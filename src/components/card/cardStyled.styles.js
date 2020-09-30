import styled from 'styled-components';
import { colors } from '../theme';

export const CardStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .content {
    width: 45vh;
    height: 45vh;
    border-style: solid;
    border-color: ${colors.secondary};
    border-width: 4px;
    display: flex;
    border-radius:20px;
    flex-direction: column;
    background-color: white;
    margin-bottom:60px;
    margin-left: 50px;
    margin-right:50px;
    

  }

  .name {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
    border-top-left-radius:14px;
    border-top-right-radius:14px;
    margin-bottom:20px;
  
  }

  img{
   
    display: flex;
    flex-direction:column;
    margin-left:20px;
    margin-right:20px;
  
  }
  .description {

    display: flex;
    flex-direction:column;
    justify-content: center;
    height:100%;
    font-size: 16px;
    font-family: "Rubik", sans-serif;
    cursor: pointer;

  }

`;