import styled from 'styled-components';
import { colors } from '../theme';

export const Container = styled.section`
  width: 100%;
  ${({dark}) => dark &&
  `background-color: ${colors.terminal};
  color: ${colors.white};`}
`;