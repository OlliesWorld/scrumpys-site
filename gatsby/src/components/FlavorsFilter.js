import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const FlavorStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    @media (max-width: 700px) {
      font-size: 10px;
    }
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--green);
    }
  }
`;

function countCidersInFlavors(ciders) {
  const counts = ciders
    .map((cider) => cider.flavors)
    .flat()
    .reduce((acc, flavor) => {
      const existingFlavor = acc[flavor.id];
      if (existingFlavor) {
        existingFlavor.count += 1;
      } else {
        acc[flavor.id] = {
          id: flavor.id,
          name: flavor.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  const sortedFlavors = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedFlavors;
}

export default function flavorsFilter({ activeflavor }) {
  const { ciders } = useStaticQuery(graphql`
    query {
      flavors: allSanityFlavor {
        nodes {
          name
          id
        }
      }
      ciders: allSanityCider {
        nodes {
          flavors {
            name
            id
          }
        }
      }
    }
  `);

  const flavorsWithCount = countCidersInFlavors(ciders.nodes);

  return (
    <FlavorStyles>
      <Link to="/ciders">
        <span className="name">ALL</span>
        <span className="count">{ciders.nodes.length}</span>
      </Link>
      {flavorsWithCount.map((flavor) => (
        <Link
          to={`/flavor/${flavor.name}`}
          key={flavor.id}
          className={flavor.name === activeflavor ? 'active' : ''}
        >
          <span className="name">{flavor.name}</span>
          <span className="count">{flavor.count}</span>
        </Link>
      ))}
    </FlavorStyles>
  );
}
