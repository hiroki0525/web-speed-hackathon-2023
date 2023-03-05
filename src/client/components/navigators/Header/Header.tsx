import type { FC } from 'react';

import { useAuthUser } from '../../../hooks/useAuthUser';

import AuthUserAnchor from './AuthUserAnchor';
import { CommonHeader } from './CommonHeader';
import { SignInButton } from './SignInButton';

export const Header: FC = () => {
  const { isAuthUser } = useAuthUser();
  return <CommonHeader>{isAuthUser ? <AuthUserAnchor /> : <SignInButton />}</CommonHeader>;
};
