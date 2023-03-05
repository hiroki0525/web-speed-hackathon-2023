import type { FC } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '../../components/application/Layout';
import { ProductList } from '../../components/feature/ProductList';
import Lazy from '../../components/libs/Lazy';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { useFeatures } from '../../hooks/useFeatures';
import { useRecommendation } from '../../hooks/useRecommendation';

import * as styles from './Top.styles';

export const Top: FC = () => {
  const { recommendation } = useRecommendation();
  const { features } = useFeatures();

  if (recommendation === undefined || features === undefined) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <Layout>
        <div>
          <ProductHeroImage product={recommendation.product} title="今週のオススメ" />

          <div className={styles.featureList} id="feature-container">
            {features.map((featureSection) => {
              return (
                <Lazy key={featureSection.id} className={styles.feature} rootId="feature-container">
                  <h2 className={styles.featureHeading}>{featureSection.title}</h2>
                  <ProductList featureSection={featureSection} />
                </Lazy>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};
