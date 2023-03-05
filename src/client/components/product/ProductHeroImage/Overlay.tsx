import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import useDeviceType from '../../../hooks/useDeviceType';
import { DeviceType } from '../../application/Providers/DeviceTypeProvider';

import * as styles from './Overlay.styles';

type Props = {
  title: string;
  children: ReactNode;
};

export const Overlay: FC<Props> = memo(({ children, title }) => {
  const deviceType = useDeviceType();

  return (
    <div className={styles.overlay}>
      <p
        className={classNames(styles.title, {
          [styles.title__desktop]: deviceType === DeviceType.DESKTOP,
          [styles.title__mobile]: deviceType === DeviceType.MOBILE,
        })}
      >
        {title}
      </p>
      <p
        className={classNames(styles.description, {
          [styles.description__desktop]: deviceType === DeviceType.DESKTOP,
          [styles.description__mobile]: deviceType === DeviceType.MOBILE,
        })}
      >
        {children}
      </p>
    </div>
  );
}, isEqual);

Overlay.displayName = 'Overlay';
