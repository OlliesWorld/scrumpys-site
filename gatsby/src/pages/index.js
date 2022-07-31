import React from 'react';
import styled from 'styled-components';
import LoadingGrid from '../components/LoadingGrid';
import { HomepageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

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

function Event({ events }) {
  console.log(events);
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Events </span>
      </h2>

      {/* {events.map((fun) => (
        <p key={fun.id}>{fun.name}</p>
      ))} */}
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
export default function Homepage() {
  const { onTap, pourmaster, about, events } = useLatestData();
  console.log(events);
  return (
    <div className="center">
      <h1>Best Cider in town!</h1>
      <HomepageGrid className="center">
        <CurrentlyPouring pourmaster={pourmaster} />
        <OnTap onTap={onTap} />
        <Event event={events} />
      </HomepageGrid>
      <About about={about} />
    </div>
  );
}
