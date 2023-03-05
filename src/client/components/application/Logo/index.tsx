import type { FC } from 'react';

import useDocumentLoadCompleted from '../../../hooks/useDocumentLoadComplete';
import { Image } from '../../foundation/Image';
export const Logo: FC = () => {
  const isDocumentLoaded = useDocumentLoadCompleted();
  return isDocumentLoaded ? <Image src="/icons/logo.svg" /> : null;
};
