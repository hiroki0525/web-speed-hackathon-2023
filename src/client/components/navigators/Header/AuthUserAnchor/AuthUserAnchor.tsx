import type { FC } from 'react';

import { Anchor } from '../../../foundation/Anchor';
import { Icon } from '../../../foundation/Icon';

import * as styles from './AuthUserAnchor.styles';

export const AuthUserAnchor: FC = () => {
    return (
    <Anchor data-testid="navigate-order" href={'/order'}>
        <div className={styles.orderLink}>
            <Icon color="#222222" height={20} type="FaShoppingCart" width={20} />
        </div>
    </Anchor>
    )
};
