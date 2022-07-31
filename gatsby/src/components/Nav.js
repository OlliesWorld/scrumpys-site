import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    margin-top: -6rem;
    padding: 0;
    display: grid;
    grid-template-columns:
      fit-content(12rem) fit-content(12rem) fit-content(12rem)
      fit-content(40%) fit-content(12rem) fit-content(12rem) fit-content(12rem);
    height: 23rem;
    grid-gap: 2rem;
    align-items: center;
    text-align: center;
    list-style: none;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
      --rotate: 1deg;
      height: 3rem;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
      height: 3rem;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 2.5rem;
    text-decoration: none;

    &:hover {
      color: var() (--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/ciders/">Ciders List</Link>
        </li>
        <li>
          <Link to="/beers">On Draft</Link>
        </li>
        <li>
          <Link to="/drinks/">Drinks</Link>
        </li>
        <li className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/menu/">menu</Link>
        </li>
        <li>
          <Link to="/pourmasters/">Pourmasters</Link>
        </li>
        <li>
          <Link to="/news/">News</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
