import { useEffect, useState } from 'react';

const gql = String.raw;

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }

`;

export default function useLatestData() {
  const [onTap, setOnTap] = useState();
  const [pourmaster, setPourmaster] = useState();
  const [about, setAbout] = useState();
  const [events, setEvents] = useState();

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              pourmaster {
                ${deets}
              }
              onTap {
              ${deets}
              }
              about 
              events {
                _id
                name
                description
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setOnTap(res.data.StoreSettings.onTap);
        setPourmaster(res.data.StoreSettings.pourmaster);
        setAbout(res.data.StoreSettings.about);
        setEvents(res.data.StoreSettings.events);
      })
      .catch((err) => {
        console.log('shoot!', err);
      });
  }, []);

  return {
    onTap,
    pourmaster,
    about,
    events,
  };
}
