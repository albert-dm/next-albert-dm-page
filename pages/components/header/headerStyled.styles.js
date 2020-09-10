import styled from 'styled-components';
import { colors } from '../../theme'

export const HeaderStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:80%;
    height:60vh;
    margin:auto;
    .profilePhoto {
      display: block;
      margin: auto;
      border-radius:50%;
      max-height:90%;
      width: auto;
      height: auto;
    }
    .profileText{
      background-color:pink;
      flex-direction:column;
      margin:50px;
    }
    .profileText h1{
      font-family: 'Coda';
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
  `;