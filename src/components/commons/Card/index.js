import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import CardImage from './CardImage/index';
import CardTitle from './CardTitle/index';
import CardText from './CardText/index';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

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
  ${(props) =>
    props.featured
      ? breakpointsMedia({
          md: css`
            flex-direction: row;
          `,
        })
      : ''};
`;

export default function Card({ img, imgAlt, title, text, featured }) {
  return (
    <CardWrapper featured={featured}>
      <CardImage img={img} imgAlt={imgAlt} featured={featured} />
      <CardTitle title={title} featured={featured} />
      {featured && <CardText text={text} featured={featured} />}
    </CardWrapper>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  featured: PropTypes.bool,
};

Card.defaultProps = {
  imgAlt: '',
  title: '',
  text: '',
  featured: false,
};
