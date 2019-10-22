import React from 'react';
import { Link } from '@reach/router';
import * as S from './styled';

export const Navbar = () => (
  <S.NavbarContainer>
    <S.Navbar>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
    </S.Navbar>
  </S.NavbarContainer>
);
