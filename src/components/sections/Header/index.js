import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper } from './styles/HeaderWrapper';
import Logo from '../../../theme/Logo';
import Menu from '../../commons/Menu';
// import { Button } from '../Button';
// import Text from '../../foundation/Text';

const HeaderBg = styled.div`
  background-color: #e9c46a;
`;

export default function Header() {
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Sobre',
      url: '/sobre',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];
  return (
    <HeaderBg>
      <HeaderWrapper>
        <HeaderWrapper.LeftSide>
          <Logo />
        </HeaderWrapper.LeftSide>
        <HeaderWrapper.RightSide>
          <Menu />
        </HeaderWrapper.RightSide>
      </HeaderWrapper>
    </HeaderBg>
  );
}
