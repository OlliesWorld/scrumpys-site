import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const CiderGridStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 4rem;
  grid-auto-rows: auto auto 200px;
  margin-bottom: 5rem;
`;

const CiderStyle = styled.div`
  display: grid;
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
`;

function SingleCider({ cider }) {
  const image = getImage(cider.image?.asset?.gatsbyImage);
  return (
    <CiderStyle>
      <Link to={`/cider/${cider.slug.current}`}>
        <h2>
          <span className="mark">{cider.name}</span>
        </h2>
      </Link>
      <p>{cider.flavors.map((flavor) => flavor.name).join(', ')}</p>
      <GatsbyImage image={image} alt={cider.name} />
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
