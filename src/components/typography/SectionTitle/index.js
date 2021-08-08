import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;

  ${breakpointsMedia({
    md: css`
      font-size: 48px;
      text-align: left;
    `,
  })}
`;
