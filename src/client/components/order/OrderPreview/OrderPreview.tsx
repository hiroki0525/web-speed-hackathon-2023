import isEqual from 'lodash/isEqual';
import type { FC } from 'react';
import { memo } from 'react';

import type { OrderFragmentResponse } from '../../../graphql/fragments';
import { formatCurrency } from '../../../utils/format_currency';
import { getActiveOffer } from '../../../utils/get_active_offer';
import { CartItem } from '../CartItem';

import * as styles from './OrderPreview.styles';

type Props = {
  order: OrderFragmentResponse;
  onUpdateCartItem: (productId: number, amount: number) => void;
  onRemoveCartItem: (productId: number) => void;
};

export const OrderPreview: FC<Props> = memo(({ onRemoveCartItem, onUpdateCartItem, order }) => {
  let totalPrice = 0;
  for (const item of order.items) {
    const offer = getActiveOffer(item.product.offers);
    const price = offer?.price ?? item.product.price;
    totalPrice += price * item.amount;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.itemList}>
        {order.items.map((item) => {
          return (
            <li key={item.product.id}>
              <CartItem item={item} onRemove={onRemoveCartItem} onUpdate={onUpdateCartItem} />
            </li>
          );
        })}
      </ul>
      <p className={styles.totalPrice}>{formatCurrency(totalPrice)}</p>
    </div>
  );
}, isEqual);

OrderPreview.displayName = 'OrderPreview';
