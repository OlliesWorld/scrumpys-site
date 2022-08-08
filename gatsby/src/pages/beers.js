import React from 'react';
import { graphql } from 'gatsby';
import BeerList from '../components/BeerList';

import SEO from '../components/SEO';
import KindFilter from '../components/TypeOfBeer';

export default function Beerpage({ data, pageContext }) {
  const beer = data.beer.nodes;

  return (
    <>
      <SEO
        title={
          pageContext.beerKind
            ? `beers With ${pageContext.beerKind} `
            : 'All beers'
        }
      />
      <KindFilter activeKind={pageContext.Kind} />
      <BeerList beer={beer} />
    </>
  );
}

export const query = graphql`
  query BeerQuery($beerKindRegex: String) {
    beer: allSanityOther(
      filter: { beerKind: { elemMatch: { name: { regex: $beerKindRegex } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        description
        beerKind {
          name
          id
        }
        image {
          asset {
            gatsbyImage(width: 100, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
  }
`;
