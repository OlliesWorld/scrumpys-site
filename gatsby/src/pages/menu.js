import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

export default function Menuspage({ data, pageContext }) {
  const foods = data.food.nodes;

  return (
    <>
      <SEO
        title={
          pageContext.beerKind
            ? `food With ${pageContext.Foodtype} `
            : 'All food'
        }
      />
      <h2>Menu</h2>
      {foods.map((food) => (
        <div key={food.id}>
          <h3 className="mark">{food.name} </h3>
          <p>{food.description}</p>
        </div>
      ))}
    </>
  );
}

export const query = graphql`
  query MenuQuery {
    food: allSanityFood {
      nodes {
        name
        id
        slug {
          current
        }
        description
        foodType {
          name
          id
        }
      }
    }
  }
`;
