import type { FC } from 'react';
import { memo } from 'react';

import { useOpenModal } from '../../../store/modal';
import { FaUserIcon } from '../../foundation/Icons/FaUserIcon';

import * as styles from './SignInButton.styles';

export const SignInButton: FC = memo(() => {
  const handleOpenModal = useOpenModal();
  return (
    <button className={styles.signInButton} data-testid="navigate-signin" onClick={() => handleOpenModal('SIGN_IN')}>
      <FaUserIcon />
    </button>
  );
});

SignInButton.displayName = 'SignInButton';
