import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: clamp(1px, 0.65vw, 8px);

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 3rem 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }

  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }
`;

export default function Logo() {
  return (
    <>
      <LogoStyles>
        <StaticImage
          className="lp"
          src="../assets/images/scrumpy-logo.jpeg"
          alt="Scrumpys Logo"
          width={250}
        />
      </LogoStyles>
    </>
  );
}
