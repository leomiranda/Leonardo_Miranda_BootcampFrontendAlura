import React from 'react';
import styled from 'styled-components';

const FooterBg = styled.footer`
  height: 68px;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  background-color: #e9c46a;
  display: flex;
  align-items: center;
  padding-
`;

export default function Footer() {
  return (
    <FooterBg>
      <FooterWrapper>
        <span>ico 1</span>
        <span>ico 2</span>
        <span>ico 3</span>
      </FooterWrapper>
    </FooterBg>
  );
}
