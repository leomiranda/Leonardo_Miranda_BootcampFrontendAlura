import React from 'react';
import PropTypes from 'prop-types';

export default function CardImage({ img }) {
  return <img src={img} alt="project" />;
}

CardImage.propTypes = {
  img: PropTypes.string.isRequired,
};
