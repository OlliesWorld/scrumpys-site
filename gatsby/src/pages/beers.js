import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  h3 {
    font-size: 30px;
    text-decoration: underline var(--yellow);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function Beerspage({ data }) {
  // console.log(data);
  return (
    <>
      <SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
      <h2 className="center">We have {data.beers.nodes.length}</h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => (
          <SingleBeerStyles key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>abv: {beer.abv}</p>
            <p>{beer.tagline}</p>
          </SingleBeerStyles>
        ))}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        abv
        image_url
        tagline
        food_pairing
      }
    }
  }
`;
