import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const PeopleGridStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const PourMastersStyles = styled.div`
  a {
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--green);
    color: white;
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export default function Pourmasterspage({ data, pageContext }) {
  console.log(data.pourmasters.nodes);
  const pourmasters = data.pourmasters.nodes;
  return (
    <>
      <SEO title={`Pourmasters - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={process.env.GATSBY_PAGE_SIZE}
        totalCount={data.pourmasters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/Pourmasters"
      />
      <PeopleGridStyles>
        {pourmasters.map((person) => (
          <PourMastersStyles key={person.id}>
            <Link to={`/pourmaster/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
              <GatsbyImage
                image={person.image.asset.gatsbyImage}
                alt={person.name}
              />
              <p className="description">{person.description}</p>
            </Link>
          </PourMastersStyles>
        ))}
      </PeopleGridStyles>
    </>
  );
}

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 3) {
    pourmasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImage(width: 200)
          }
        }
      }
    }
  }
`;
