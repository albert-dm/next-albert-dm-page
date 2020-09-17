import styled from 'styled-components';

export const BodyStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:70%;
    height:auto;
    margin:auto;
    margin-bottom:50px;
    margin-top:50px;
    .profilePhoto {
      display: block;
      margin: auto;
      border-radius:50%;
      max-height:50%;
      width: auto;
      height: auto;
    }
    .profileText{
      flex-direction:column;
      margin:50px;
      width:40%;
    }
    .profileText h1{
      font-family: 'Rubik';
      font-weight:900;
    }
    .description {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 30px;
    }
    .descriptionTwo {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }
    .socialButtons {
      margin-top:50px;
      display:flex;
      flex-direction:row;
      justify-content:space-around;
    }
  `;