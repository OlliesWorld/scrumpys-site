// import React from 'react';
// import { graphql } from 'gatsby';
// import SEO from '../components/SEO';

// export default function Newspage({ data, pageContext }) {
//   const foods = data.food.nodes;

//   return (
//     <>
//       <SEO title="The Happenings at Scrumpy&#39; Cider Bar" />
//       <h2>What is Happening!</h2>
//       {/* {foods.map((food) => (
//         <div key={food.id}>
//           <h3 className="mark">{food.name} </h3>
//           <p>{food.description}</p>
//         </div>
//       ))} */}
//     </>
//   );
// }
// export const query = graphql`
//   query NewsQuery {
//     news: allSanityNews {
//       nodes {
//         name
//         id
//         slug {
//           current
//         }
//         description
//       }
//     }
//   }
// `;
