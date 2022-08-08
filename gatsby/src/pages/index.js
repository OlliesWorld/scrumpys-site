import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import LoadingGrid from '../components/LoadingGrid';
import { HomepageGrid, EventsGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';
import SEO from '../components/SEO';

const ParagraphStyles = styled.div`
  margin: 0 auto;
  line-height: 1.5;
`;

function CurrentlyPouring({ pourmaster }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">PourMasters On</span>
      </h2>
      <p>Standing by, ready to pour for you!</p>
      {!pourmaster && <LoadingGrid count={4} />}
      {pourmaster && !pourmaster?.length && <p>No one is working right now</p>}
      {pourmaster?.length && <ItemGrid items={pourmaster} />}
    </div>
  );
}

function OnTap({ onTap }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">On Tap </span>
      </h2>
      <p>Come on by, buy the pint!</p>
      {!onTap && <LoadingGrid count={4} />}
      {onTap && !onTap?.length && <p>No pizza ready!</p>}
      {onTap?.length && <ItemGrid items={onTap} />}
    </div>
  );
}

function About({ about }) {
  return (
    <ParagraphStyles className="center">
      <h2>
        <span className="mark tilt">Let us tell you a story! </span>
      </h2>
      <p className="paragraph">{about}</p>
    </ParagraphStyles>
  );
}
export default function Homepage({ data }) {
  const { onTap, pourmaster, about } = useLatestData();
  const events = data.events.nodes;
  return (
    <>
      <SEO title="Scrumpy's Cider Bar" />
      <div className="center">
        <h1>Best Cider in town!</h1>
        <HomepageGrid className="center">
          <OnTap onTap={onTap} />
          <CurrentlyPouring pourmaster={pourmaster} />

          <div>
            <h2 className="center">
              <span>Events </span>
            </h2>

            {events.map((fun) => (
              <EventsGrid key={fun._id}>
                <h3 className="mark tilt">{fun.name}</h3>
                <p>{fun.description}</p>
              </EventsGrid>
            ))}
          </div>
          <div>
            <Link to="/news" className="center">
              Check out the latest!
            </Link>
          </div>
        </HomepageGrid>
        <About about={about} />
      </div>
    </>
  );
}

export const query = graphql`
  query EventsQuery {
    events: allSanityEvent {
      nodes {
        name
        _id
        description
      }
    }
  }
`;
