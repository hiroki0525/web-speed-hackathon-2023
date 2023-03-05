import type { FC, ReactNode } from 'react';
import { memo } from 'react';

import { Logo } from '../../application/Logo';
import { Anchor } from '../../foundation/Anchor';

import * as styles from './CommonHeader.styles';

export const CommonHeader: FC<{ children: ReactNode }> = memo(({ children }) => {
  return (
    <header className={styles.container}>
      <Anchor to="/">
        <div className={styles.logo}>
          <Logo />
        </div>
      </Anchor>
      {children}
    </header>
  );
});

CommonHeader.displayName = 'CommonHeader';
