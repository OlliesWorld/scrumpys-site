import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const CiderGridStyles = styled.div`
  display: grid;
  @media (min-width: 800px) {
    grid-template-columns: auto auto auto;
  }
  gap: 4rem;
  grid-auto-rows: auto auto 200px;
`;

const CiderStyle = styled.div`
  display: grid;

  margin-bottom: 2rem;

  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span;
  grid-gap: 10px;
  /* width: 50%; */

  h2,
  p {
    margin: 0;
  }

  img {
    /* margin-left: 1rem; */
    margin-bottom: 1rem;
    justify-content: center;
  }
`;

function SingleCider({ cider }) {
  const image = getImage(cider.image?.asset?.gatsbyImage);
  return (
    <CiderStyle>
      <Link to={`/cider/${cider.slug.current}`}>
        <GatsbyImage image={image} alt={cider.name} />
        <h2>
          <span className="mark">{cider.name}</span>
        </h2>
        <p>{cider.flavors.map((flavor) => flavor.name).join(', ')}</p>
      </Link>
    </CiderStyle>
  );
}

export default function CiderList({ ciders }) {
  return (
    <CiderGridStyles>
      {ciders.map((cider) => (
        <SingleCider key={cider.id} cider={cider} />
      ))}
    </CiderGridStyles>
  );
}
