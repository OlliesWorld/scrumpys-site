import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomepageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

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

function Ontap({ ontap }) {
  console.log(ontap);
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">On Tap </span>
      </h2>
      <p>Come on by, buy the pint!</p>
      {!ontap && <LoadingGrid count={4} />}
      {ontap && !ontap?.length && <p>No pizza ready!</p>}
      {ontap?.length && <ItemGrid items={ontap} />}
    </div>
  );
}

export default function Homepage() {
  const { pourmaster, ontap } = useLatestData();

  return (
    <div className="center">
      <h1>Best Cider in town!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomepageGrid className="center">
        <CurrentlyPouring pourmaster={pourmaster} />
        <Ontap ontap={ontap} />
      </HomepageGrid>
    </div>
  );
}
