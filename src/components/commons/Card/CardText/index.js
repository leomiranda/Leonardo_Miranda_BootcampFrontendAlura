import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardTextWrapper = styled.p`
  padding: 0 15px;
  font-size: 18px;
`;

export default function CardText({ text }) {
  return <CardTextWrapper>{text}</CardTextWrapper>;
}

CardText.propTypes = {
  text: PropTypes.string.isRequired,
};
