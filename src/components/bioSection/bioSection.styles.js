import styled from 'styled-components';
import { ContentWrapper } from '../contentWrapper';
import { headerSize } from '../theme';

export const BioSectionStyled = styled(ContentWrapper)`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap: wrap;
    min-height: calc(100vh - ${headerSize});
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
      margin:auto;
      width:40%;
      min-width: 350px;
      padding: 20px 0;
    }
    .socialButtons {
      margin-top:50px;
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      padding: 20px 0;
    }
  `;