import { ApolloProvider, SuspenseCache } from '@apollo/client';
import type { FC, ReactNode } from 'react';
import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { apolloClient } from '../../../utils/apollo_client';

import DeviceDetectProvider from './DeviceTypeProvider';

type Props = {
  children: ReactNode;
};

const Fallback = lazy(() => import('../../../pages/Fallback'));

const suspenseCache = new SuspenseCache();

export const Providers: FC<Props> = ({ children }) => (
  <ApolloProvider client={apolloClient} suspenseCache={suspenseCache}>
    <BrowserRouter>
      <RecoilRoot>
        <ErrorBoundary fallbackRender={Fallback}>
          <HelmetProvider>
            <DeviceDetectProvider>
              <Suspense fallback={null}>{children}</Suspense>
            </DeviceDetectProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  </ApolloProvider>
);
