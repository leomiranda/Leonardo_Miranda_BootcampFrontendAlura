import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 38px;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #000;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        font-size: 16px;
      `,
      md: css`
        font-size: 18px;
      `,
    })}
    &:hover,
    &:focus {
      color: #fff;
    }
  }
`;

export default function Menu() {
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
    <MenuList>
      {links.map((link) => (
        <li key={link.url}>
          <a tag="a" href={link.url}>
            {link.texto}
          </a>
        </li>
      ))}
    </MenuList>
  );
}
