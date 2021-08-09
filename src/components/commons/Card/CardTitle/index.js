import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardTitleWrapper = styled.h3`
  text-transform: uppercase;
  margin: 15px;
`;

export default function CardTitle({ title }) {
  return <CardTitleWrapper>{title}</CardTitleWrapper>;
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
