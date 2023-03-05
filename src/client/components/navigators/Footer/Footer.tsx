import type { FC } from 'react';
import { lazy } from 'react';

// import { GetDeviceType } from '../../foundation/GetDeviceType';
import Lazy from '../../libs/Lazy';

import * as styles from './Footer.styles';

const FooterList = lazy(() => import('./FooterList'));

export const Footer: FC = () => {
  return (
    <Lazy suspense as="footer" className={styles.container}>
      <GetDeviceType>
        {({ deviceType }) => {
          return <FooterList deviceType={deviceType} />;
        }}
      </GetDeviceType>
    </Lazy>
  );
};
