import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper } from './styles/HeaderWrapper';
import Logo from '../../../theme/Logo';
import NavBar from './NavBar';

const HeaderBg = styled.header`
  background-color: #e9c46a;
`;

export default function Header() {
  return (
    <HeaderBg>
      <HeaderWrapper>
        <HeaderWrapper.LeftSide>
          <Logo />
        </HeaderWrapper.LeftSide>
        <HeaderWrapper.RightSide>
          <NavBar />
        </HeaderWrapper.RightSide>
      </HeaderWrapper>
    </HeaderBg>
  );
}
