import styled from 'styled-components';
import { colors } from '../theme';

export const ContentWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  ${({dark}) => dark &&
  `background-color: ${colors.terminal};
  color: ${colors.white};`
}
`;