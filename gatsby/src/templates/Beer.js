import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerStyle = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  img {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
  .header {
    display: flex;
    align-items: center;
    h2 {
      margin-right: 1rem;
    }
  }
`;

export default function SingleBeerPage({ data: { beer } }) {
  return (
    <>
      <SEO title={beer.name} image={beer.image?.asset?.fluid?.src} />
      <BeerStyle>
        <GatsbyImage image={beer.image.asset.gatsbyImage} alt={beer.name} />
        <div>
          <div className="header">
            <h2 className="mark">{beer.name}</h2>
            {beer.beerKind.map((beerKind) => (
              <p key={beerKind.id}>{beerKind.name}</p>
            ))}
          </div>
          <p className="paragraph">{beer.description}</p>
        </div>
      </BeerStyle>
    </>
  );
}
export const query = graphql`
  query ($slug: String!) {
    beer: sanityOther(slug: { current: { eq: $slug } }) {
      name
      description
      id
      image {
        asset {
          gatsbyImage(width: 100)
        }
      }
      beerKind {
        name
        id
      }
    }
  }
`;
