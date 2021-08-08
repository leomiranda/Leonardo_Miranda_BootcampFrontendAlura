import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

HeaderWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  width: 83px;
  height: 40px;
  ${breakpointsMedia({
    md: css`
      width: 136px;
      height: 67px;
    `,
  })}
`;

HeaderWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  width: 100%;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;
