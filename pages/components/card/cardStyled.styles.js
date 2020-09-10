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
    border-width: 2px;
    border-radius: 20px;
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
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    cursor: pointer;
  }
  .description {
    display: flex;
    flex-direction:column;
    justify-content: center;
    height:100%;
    font-size: 16px;
    font-family: "Rubik", sans-serif;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
  }
  .description:hover{
    background-color: #cccccc;
  }
`;