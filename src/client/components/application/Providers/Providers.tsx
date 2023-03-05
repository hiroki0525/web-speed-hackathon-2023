import { ApolloProvider, SuspenseCache } from '@apollo/client';
import type { FC, ReactNode } from 'react';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
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
          <DeviceDetectProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </DeviceDetectProvider>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  </ApolloProvider>
);
