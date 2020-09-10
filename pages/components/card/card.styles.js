import styled from "styled-components";

export const CardContainer = styled.div `
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
    border-color: #3f3db9;
    border-width: 0.1px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin:30px;
  }
  .name {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3f3db9;
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