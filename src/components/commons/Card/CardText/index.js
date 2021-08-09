import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardTextWrapper = styled.h3`
  padding: 0 15px;
`;

export default function CardTitle({ text }) {
  return <CardTextWrapper>{text}</CardTextWrapper>;
}

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
