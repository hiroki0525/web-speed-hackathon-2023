import type {FC} from 'react';
import { lazy } from 'react';
import * as Router from 'react-router-dom';

import { useScrollToTop } from './hooks';

const NotFound = lazy(() => import('../../../pages/NotFound'))
const Order = lazy(() => import('../../../pages/Order'))
const OrderComplete = lazy(() => import('../../../pages/OrderComplete'))
const ProductDetail = lazy(() => import('../../../pages/ProductDetail'))
const Top = lazy(() => import('../../../pages/Top'))


export const Routes: FC = () => {
  useScrollToTop();

  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<ProductDetail />} path="/product/:productId" />
      <Router.Route element={<Order />} path="/order" />
      <Router.Route element={<OrderComplete />} path="/order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
