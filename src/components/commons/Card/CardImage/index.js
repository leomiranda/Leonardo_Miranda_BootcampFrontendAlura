import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardImageWrapper = styled.img`
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
`;

export default function CardImage({ img, imgAlt, featured }) {
  return <CardImageWrapper src={img} alt={imgAlt} featured={featured} />;
}

CardImage.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  featured: PropTypes.bool,
};

CardImage.defaultProps = {
  imgAlt: '',
  featured: '',
};
