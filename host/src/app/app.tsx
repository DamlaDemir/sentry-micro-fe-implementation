import * as React from 'react';
import sentry from '../services/sentry';

const Header = React.lazy(() => import('header/Module'));
const Footer = React.lazy(() => import('footer/Module'));
const Product = React.lazy(() => import('product/Module'));

export function App() {
  sentry.init();
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Product />
      <Footer />
    </React.Suspense>
  );
}

export default App;
