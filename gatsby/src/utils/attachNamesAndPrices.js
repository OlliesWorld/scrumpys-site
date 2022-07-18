// import calculatePizzaPrice from './calculateCiderPrice';
// import formatMoney from './formatMoney';

// export default function attachNamesAndPrices(order, pizzas) {
//   return order.map((item) => {
//     const pizzaInfo = pizzas.find((pizza) => pizza.id === item.id);
//     return {
//       ...item,
//       name: pizzaInfo.name,
//       thumbnail: pizzaInfo.image.asset.fluid.src,
//       price: formatMoney(calculatePizzaPrice(pizzaInfo.price, item.size)),
//     };
//   });
// }
