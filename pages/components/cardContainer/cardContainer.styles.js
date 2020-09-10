import styled from 'styled-components';
import { colors } from '../../theme'

export const CardContainer  = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
    .cards{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    background-color:${colors.terminal};
    justify-content:space-around;
    align-items:center;
    height:auto;
    border-radius:10px;
    }
  `;