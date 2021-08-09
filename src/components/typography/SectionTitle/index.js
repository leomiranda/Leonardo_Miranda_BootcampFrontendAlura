import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const SectionTitleWrapper = styled.h3`
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

export default function SectionTitle({ children }) {
  return <SectionTitleWrapper>{children}</SectionTitleWrapper>;
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
