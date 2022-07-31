import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const CiderStyle = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  img {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
`;

export default function SingleCiderPage({ data: { cider } }) {
  return (
    <>
      <SEO title={cider.name} image={cider.image?.asset?.fluid?.src} />
      <CiderStyle>
        <GatsbyImage image={cider.image.asset.gatsbyImage} alt={cider.name} />
        <div>
          <h2 className="mark">{cider.name}</h2>
          <p>{cider.description}</p>
          <ul>
            {cider.flavors.map((flavor) => (
              <li key={flavor.id}>{flavor.name}</li>
            ))}
          </ul>
        </div>
      </CiderStyle>
    </>
  );
}
export const query = graphql`
  query ($slug: String!) {
    cider: sanityCider(slug: { current: { eq: $slug } }) {
      name
      description
      id
      image {
        asset {
          gatsbyImage(width: 200)
        }
      }
      flavors {
        name
        id
      }
    }
  }
`;