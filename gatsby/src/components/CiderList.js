import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const CiderGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const CiderStyle = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
  img {
    width: 200px;
    height: 200px;
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
