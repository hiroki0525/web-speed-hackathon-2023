import type { FC } from 'react';
import * as Router from 'react-router-dom';

import lazyWhenIdle from '../../../utils/lazyWhenIdle';

import { useScrollToTop } from './hooks';

const NotFound = lazyWhenIdle(() => import('../../../pages/NotFound'))
const Order = lazyWhenIdle(() => import('../../../pages/Order'))
const OrderComplete = lazyWhenIdle(() => import('../../../pages/OrderComplete'))
const ProductDetail = lazyWhenIdle(() => import('../../../pages/ProductDetail'))
const Top = lazyWhenIdle(() => import('../../../pages/Top'))


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
