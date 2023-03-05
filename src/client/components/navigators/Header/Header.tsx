import type { FC } from 'react';
import { lazy } from 'react';

import { useAuthUser } from '../../../hooks/useAuthUser';
import { useOpenModal } from '../../../store/modal';
import { Logo } from '../../application/Logo';
import { Anchor } from '../../foundation/Anchor';
import { FaUserIcon } from '../../foundation/Icons/FaUserIcon';

import * as styles from './Header.styles';

const AuthUserAnchor = lazy(() => import('./AuthUserAnchor'));

export const Header: FC = () => {
  const { isAuthUser } = useAuthUser();
  const handleOpenModal = useOpenModal();

  return (
    <header className={styles.container}>
      <Anchor to="/">
        <div className={styles.logo}>
          <Logo />
        </div>
      </Anchor>
      {isAuthUser ? (
        <AuthUserAnchor />
      ) : (
        <button
          className={styles.signInButton}
          data-testid="navigate-signin"
          onClick={() => handleOpenModal('SIGN_IN')}
        >
          <FaUserIcon />
        </button>
      )}
    </header>
  );
};
