import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Box = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;

  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
