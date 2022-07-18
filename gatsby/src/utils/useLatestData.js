import { useEffect, useState } from 'react';
// import { graphql } from 'gatsby';

const gql = String.raw;

// const deets = `
//     name
//     _id
//     image {
//       asset {
//         url
//         metadata {
//           lqip
//         }
//       }
//     }

// `;

export default function useLatestData() {
  const [ontap, setOntap] = useState();
  const [pourmaster, setPourmaster] = useState();
  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            allStoreSettings {
              pourmaster {
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
              }
              ontap {
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
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setOntap(res.data.allStoreSettings.ontap);
        setPourmaster(res.data.allStoreSettings.pourmaster);
      })
      .catch((err) => {
        console.log('shoot!', err);
      });
  }, []);

  return {
    ontap,
    pourmaster,
  };
}
