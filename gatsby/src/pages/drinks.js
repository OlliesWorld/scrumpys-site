import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const OtherDrinkStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const CocktailStyles = styled.div`
  width: 50%;
`;

export default function Drinkspage({ data, pageContext }) {
  const cocktails = data.cocktails.nodes;

  return (
    <OtherDrinkStyles>
      <SEO
        title={
          pageContext.beerKind
            ? `drinks With ${pageContext.cocktails} `
            : 'All Drinks'
        }
      />
      <CocktailStyles>
        <h2>Cocktail Drinks</h2>
        {cocktails.map((cocktail) => (
          <div key={cocktail.id}>
            <h3 className="mark tilt">{cocktail.name} </h3>
            <p>{cocktail.description}</p>
          </div>
        ))}
      </CocktailStyles>
      {/* <h2>Other Drinks</h2>
  
        {cocktails.map((cocktail) => (
          <div key={cocktail.id}>
            <h3 className="mark tilt">{cocktail.name} </h3>
            <p>{cocktail.description}</p>
          </div>
        ))} */}
    </OtherDrinkStyles>
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
