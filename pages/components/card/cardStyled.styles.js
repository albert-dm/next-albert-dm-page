import styled from "styled-components";
import { colors } from '../../theme'

export const CardStyled = styled.div `
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");

  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  align-items: center;
  text-align: center;
  
  .content {
    width: 40vh;
    height: 40vh;
    border-style: solid;
    border-color: ${colors.secondary};
    border-width: 4px;
    display: flex;
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