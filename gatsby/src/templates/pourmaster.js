import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

export default function PourmasterPage({ data: { person } }) {
  return (
    <>
      <SEO title={person.name} image={person.image.asset.src} />
      <div className="center">
        <GatsbyImage image={person.image.asset.gatsbyImage} alt={person.name} />
        <h2>
          <span className="mark">{person.name}</span>
        </h2>
        <p>{person.description}</p>
      </div>
    </>
  );
}
export const query = graphql`
  query ($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          gatsbyImage(width: 1000, height: 750)
        }
      }
    }
  }
`;
