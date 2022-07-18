import React from 'react';
import { graphql } from 'gatsby';
import CiderList from '../components/CiderList';
import FlavorsFilter from '../components/FlavorsFilter';
import SEO from '../components/SEO';

export default function Ciderspage({ data, pageContext }) {
  const ciders = data.ciders.nodes;

  return (
    <>
      <SEO
        title={
          pageContext.flavor
            ? `ciders With ${pageContext.flavor} `
            : 'All ciders'
        }
      />
      <FlavorsFilter activeFlavor={pageContext.Flavor} />
      <CiderList ciders={ciders} />
    </>
  );
}

export const query = graphql`
  query CiderQuery($flavorRegex: String) {
    ciders: allSanityCider(
      filter: { flavors: { elemMatch: { name: { regex: $flavorRegex } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        flavors {
          name
          id
        }
        image {
          asset {
            gatsbyImage(width: 400)
          }
        }
      }
    }
  }
`;
