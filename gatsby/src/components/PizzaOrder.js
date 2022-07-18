// import React from 'react';
// import { GatsbyImage } from "gatsby-plugin-image";
// import MenuItemStyles from '../styles/MenuItemStyles';
// import calculatePizzaPrice from '../utils/calculatePizzaPrice';
// import formatMoney from '../utils/formatMoney';

// export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
//   return <>
//     {order.map((singleOrder, index) => {
//       const pizza = pizzas.find(
//         (singlePizza) => singlePizza.id === singleOrder.id
//       );
//       return (
//         <MenuItemStyles key={`${singleOrder.id} -${index}`}>
//           <GatsbyImage image={pizza.image.childImageSharp.gatsbyImageData} alt={pizza.name} />
//           <h2>{pizza.name} </h2>
//           <p>
//             {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
//             <button
//               type="button"
//               className="remove"
//               title={`Remove ${singleOrder.size} ${pizza.name} from order`}
//               onClick={() => removeFromOrder(index)}
//             >
//               &times;
//             </button>
//           </p>
//         </MenuItemStyles>
//       );
//     })}
//   </>;
// }
