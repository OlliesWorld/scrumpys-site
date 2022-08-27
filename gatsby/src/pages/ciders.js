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
      <FlavorsFilter activeFlavor={pageContext.flavor} />
      <CiderList ciders={ciders} />
    </>
  );
}

export const query = graphql`
  query CiderQuery($flavor: [String]) {
    ciders: allSanityCider(
      filter: { flavors: { elemMatch: { name: { in: $flavor } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        abv
        flavors {
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
