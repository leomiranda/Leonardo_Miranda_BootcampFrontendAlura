import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const CardTitleWrapper = styled.h3`
  text-transform: uppercase;
  margin: 15px;
  ${(props) =>
    props.featured
      ? breakpointsMedia({
          md: css`
            display: block;
            position: absolute;
            background: #fff;
            padding: 10px;
            font-size: 32px;
          `,
        })
      : ''};
`;

export default function CardTitle({ title, featured }) {
  return <CardTitleWrapper featured={featured}>{title}</CardTitleWrapper>;
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  featured: PropTypes.bool,
};

CardTitle.defaultProps = {
  featured: false,
};
