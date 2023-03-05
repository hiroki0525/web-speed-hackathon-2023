import type { FC } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout } from '../../components/application/Layout';
import { ProductHeroImage } from '../../components/product/ProductHeroImage';
import { useFeatures } from '../../hooks/useFeatures';
import { useRecommendation } from '../../hooks/useRecommendation';

import { FeatureList } from './FeatureList';

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
        <ProductHeroImage product={recommendation.product} title="今週のオススメ" />
        <FeatureList features={features} />
      </Layout>
    </>
  );
};
