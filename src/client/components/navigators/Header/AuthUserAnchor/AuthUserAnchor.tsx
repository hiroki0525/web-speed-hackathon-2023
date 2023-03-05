import type { FC } from 'react';

import { Anchor } from '../../../foundation/Anchor';
import { FaShoppingCartIcon } from '../../../foundation/Icons/FaShoppingCartIcon';

import * as styles from './AuthUserAnchor.styles';

export const AuthUserAnchor: FC = () => {
  return (
    <Anchor data-testid="navigate-order" to="/order">
      <div className={styles.orderLink}>
        <FaShoppingCartIcon />
      </div>
    </Anchor>
  );
};
