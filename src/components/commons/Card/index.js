import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardImage from './CardImage/index';
import CardTitle from './CardTitle/index';
import CardText from './CardText/index';

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 30px;
  &:hover {
    img {
      filter: contrast(100%);
    }
  }
`;

export default function Card({ img, imgAlt, title, text }) {
  return (
    <CardWrapper>
      <CardImage img={img} imgAlt={imgAlt} />
      <CardTitle title={title} />
      <CardText text={text} />
    </CardWrapper>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  imgAlt: '',
  title: '',
  text: '',
};
