import styled from 'styled-components';
import { colors, headerSize } from '../theme';

export const HeaderStyled = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${colors.white};
    padding: 20px;
    border-bottom: 2px solid ${colors.secondary};
    height: ${headerSize};
    overflow: hidden;
  `;