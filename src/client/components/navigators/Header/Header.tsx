import type {FC} from 'react';
import { lazy } from 'react';

import { useAuthUser } from '../../../hooks/useAuthUser';
import { useOpenModal } from '../../../store/modal';
import { Anchor } from '../../foundation/Anchor';
import { Icon } from '../../foundation/Icon';
import { Image } from '../../foundation/Image';

import * as styles from './Header.styles';

const AuthUserAnchor = lazy(() => import("./AuthUserAnchor"))

export const Header: FC = () => {
  const { isAuthUser } = useAuthUser();
  const handleOpenModal = useOpenModal();

  return (
    <header className={styles.container}>
      <Anchor href="/">
        <div className={styles.logo}>
          <Image src="/icons/logo.svg" />
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
          <Icon color="#222222" height={20} type="FaUser" width={20} />
        </button>
      )}
    </header>
  );
};
