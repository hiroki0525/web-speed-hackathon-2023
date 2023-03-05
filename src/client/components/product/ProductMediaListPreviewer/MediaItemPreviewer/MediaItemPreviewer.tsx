import type { FC } from 'react';
import { lazy } from 'react';

import { getMediaType } from '../../../../utils/get_media_type';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItemPreiewer.styles';

type Props = {
  filename: string;
};

const VideoPreviewer = lazy(() => import('./VideoPreviewer'));

export const MediaItemPreviewer: FC<Props> = ({ filename }) => {
  const type = getMediaType(filename);

  return (
    <div className={styles.container}>
      {type === 'image' ? <Image fill src={filename} /> : <VideoPreviewer filename={filename} />}
    </div>
  );
};
