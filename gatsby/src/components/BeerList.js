import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const BeerStyle = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: 2.8rem 10rem 3rem;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span;
  grid-gap: 1rem;

  h2,
  p {
    margin: 0;
  }
  .description {
    width: 100%;
  }
`;

function SingleBeer({ beer }) {
  const image = getImage(beer.image?.asset?.gatsbyImage);
  return (
    <BeerStyle>
      <Link to={`/beer/${beer.slug.current}`}>
        <h2>
          <span className="mark">{beer.name}</span>
        </h2>
      </Link>
      <GatsbyImage image={image} alt={beer.name} />
      <p className="description">
        {beer.beerKind.map((beerKind) => beerKind.name).join(', ')}
      </p>
      <p className="description paragraph">{beer.description}</p>
    </BeerStyle>
  );
}

export default function BeerList({ beer }) {
  return (
    <BeerGridStyles>
      {beer.map((beers) => (
        <SingleBeer key={beers.id} beer={beers} />
      ))}
    </BeerGridStyles>
  );
}
