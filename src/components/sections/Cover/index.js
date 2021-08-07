import React from 'react';
import styled from 'styled-components';

const CoverWrapper = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  height: 50%;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export default function Cover(props) {
  return (
    <CoverWrapper>
      <div>
        <h1>Leo Miranda</h1>
        <h2>Frontend Developer</h2>
      </div>
    </CoverWrapper>
  );
}
