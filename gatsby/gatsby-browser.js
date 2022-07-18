// import { OrderProvider } from './src/components/OrderContext';

const React = require('react');
const Layout = require('./src/components/Layout').default;

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// export function wrapRootElement({ element }) {
//   return <OrderProvider>{element}</OrderProvider>;
// }
