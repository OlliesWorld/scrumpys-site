import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

export default function Drinkspage({ data, pageContext }) {
  const cocktails = data.cocktails.nodes;

  return (
    <>
      <SEO
        title={
          pageContext.beerKind
            ? `beers With ${pageContext.beerKind} `
            : 'All beers'
        }
      />
      <h2>Cocktail Drinks</h2>
      {cocktails.map((cocktail) => (
        <div key={cocktail.id}>
          <h3>{cocktail.name} </h3>
          <p>{cocktail.description}</p>
        </div>
      ))}
      <h2>Other Drinks</h2>
    </>
  );
}

export const query = graphql`
  query CocktailsQuery {
    cocktails: allSanityCocktail {
      nodes {
        name
        id
        slug {
          current
        }
        description
      }
    }
  }
`;
