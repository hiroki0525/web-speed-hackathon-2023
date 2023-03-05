import classNames from 'classnames';
import type { FC } from 'react';

import useDeviceType from '../../../../hooks/useDeviceType';
import { DeviceType } from '../../../application/Providers/DeviceTypeProvider';

import * as styles from './VideoPreviewer.styles';

type Props = {
  filename: string;
};

const VideoPreviewer: FC<Props> = ({ filename }) => {
  const deviceType = useDeviceType();

  return (
    <video
      autoPlay
      controls
      muted
      playsInline
      className={classNames(styles.video, {
        [styles.video__desktop]: deviceType === DeviceType.DESKTOP,
        [styles.video__mobile]: deviceType === DeviceType.MOBILE,
      })}
      src={filename}
    />
  );
};

export default VideoPreviewer;
