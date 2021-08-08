import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
  justify-content: center;
  a {
    width: 32px;
    height: 32px;
    font-size: 32px;
    color: #000;
    margin: 0 16px;
  }
`;

export default function Footer() {
  return (
    <FooterBg>
      <FooterWrapper>
        <a
          tag="a"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/leomiranda"
        >
          <FaGithub />
        </a>
        <a
          tag="a"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/leonardomir/"
        >
          <FaLinkedin />
        </a>
      </FooterWrapper>
    </FooterBg>
  );
}
