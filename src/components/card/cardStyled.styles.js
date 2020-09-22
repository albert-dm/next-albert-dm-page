import styled from 'styled-components';
import { colors } from '../theme';

export const CardStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .content {
    width: 40vh;
    height: 40vh;
    border-style: solid;
    border-color: ${colors.secondary};
    border-width: 4px;
    display: flex;
    border-radius:20px;
    flex-direction: column;
    background-color: white;
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
    font-size:20px;
    color:white;
    cursor: pointer;
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
  .description:hover{
    background-color: #cccccc;
  }
`;