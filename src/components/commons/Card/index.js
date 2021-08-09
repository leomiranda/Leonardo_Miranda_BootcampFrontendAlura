import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardImage from './CardImage/index';

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

  img {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(70%);
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    /* background-image: url('https://placeimg.com/640/480/tech/sepia'); */
  }

  h3 {
    text-transform: uppercase;
    margin: 15px;
  }

  p {
    padding: 0 15px;
  }
`;

export default function Card({ img }) {
  return (
    <CardWrapper>
      <CardImage img={img} />
      <h3>Project Report</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip. Cum societes natoque
        penatibus et justo.
      </p>
    </CardWrapper>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
};
