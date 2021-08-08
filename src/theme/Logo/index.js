import React from 'react';
import styled from 'styled-components';

export const LogoStyle = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Logo() {
  return <LogoStyle>&lt; eo</LogoStyle>;
}
