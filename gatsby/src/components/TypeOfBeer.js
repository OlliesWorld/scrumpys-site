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
      color: white;
    }
  }
`;

function countBeersInKind(beers) {
  const counts = beers
    .map((beer) => beer.beerKind)
    .flat()
    .reduce((acc, beerKind) => {
      const existingKind = acc[beerKind.id];
      if (existingKind) {
        existingKind.count += 1;
      } else {
        acc[beerKind.id] = {
          id: beerKind.id,
          name: beerKind.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  const sortedKinds = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedKinds;
}

export default function KindFilter({ activeKind }) {
  const { beers } = useStaticQuery(graphql`
    query {
      kind: allSanityBeerKind {
        nodes {
          name
          id
        }
      }
      beers: allSanityOther {
        nodes {
          beerKind {
            name
            id
          }
        }
      }
    }
  `);

  const kindsWithCount = countBeersInKind(beers.nodes);

  return (
    <FlavorStyles>
      <Link to="/beers">
        <span className="name">ALL</span>
        <span className="count">{beers.nodes.length}</span>
      </Link>
      {kindsWithCount.map((kind) => (
        <Link
          to={`/kind/${kind.name}`}
          key={kind.id}
          className={kind.name === activeKind ? 'active' : ''}
        >
          <span className="name">{kind.name}</span>
          <span className="count">{kind.count}</span>
        </Link>
      ))}
    </FlavorStyles>
  );
}
