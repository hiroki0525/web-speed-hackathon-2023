import type { FC } from 'react';
import React, { memo } from 'react';

import { ProductList } from '../../components/feature/ProductList';
import type { FeatureSectionFragmentResponse } from '../../graphql/fragments';

import * as styles from './FeatureList.styles';

export const FeatureList: FC<{ features: FeatureSectionFragmentResponse[] }> = memo(({ features }) => {
  return (
    <div className={styles.featureList}>
      {features.map((featureSection) => {
        return (
          <div key={featureSection.id} className={styles.feature}>
            <h2 className={styles.featureHeading}>{featureSection.title}</h2>
            <ProductList featureSection={featureSection} />
          </div>
        );
      })}
    </div>
  );
});

FeatureList.displayName = 'FeatureList';
