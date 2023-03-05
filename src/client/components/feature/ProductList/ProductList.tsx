import isEqual from 'lodash/isEqual';
import type { FC } from 'react';
import { lazy, memo } from 'react';

import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import useDeviceType from '../../../hooks/useDeviceType';
import { DeviceType } from '../../application/Providers/DeviceTypeProvider';

type Props = {
  featureSection: FeatureSectionFragmentResponse;
};

const ProductListSlider = lazy(() => import('../ProductListSlider'));
const ProductGridList = lazy(() => import('../ProductGridList'));

export const ProductList: FC<Props> = memo(({ featureSection }) => {
  const deviceType = useDeviceType();
  return deviceType === DeviceType.DESKTOP ? (
    <ProductListSlider featureSection={featureSection} />
  ) : (
    <ProductGridList featureSection={featureSection} />
  );
}, isEqual);

ProductList.displayName = 'ProductList';
