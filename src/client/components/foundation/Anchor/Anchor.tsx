import type { FC } from 'react';
import type { NavLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import * as styles from './Anchor.styles';

type Props = NavLinkProps;

export const Anchor: FC<Props> = ({ children, to, ...rest }) => (
  <NavLink className={styles.container} to={to} {...rest}>
    {children}
  </NavLink>
);
