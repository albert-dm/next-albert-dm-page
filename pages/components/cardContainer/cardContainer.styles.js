import styled from 'styled-components';
import { colors } from '../../theme'

export const CardContainer  = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Coda:wght@800&display=swap');
    background-color:${colors.terminal};
    border-radius:10px;
    .title {
      color:white;
      font-family: 'Coda';
      font-size: 24px;
      padding:40px;
    }
    .cards{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    height:auto;
    }
  `;