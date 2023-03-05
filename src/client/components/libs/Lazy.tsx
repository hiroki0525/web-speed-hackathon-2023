import type { FC, ReactNode } from 'react';
import type { LazyLoadProps } from 'react-dom-lazyload-component';
import LazyLoad from 'react-dom-lazyload-component';

type LazyProps = Pick<LazyLoadProps, 'as' | 'suspense'> & {
  readonly className?: string;
  readonly children: ReactNode;
  readonly rootId?: string;
};

const Lazy: FC<LazyProps> = ({ as, children, className, rootId, suspense }) => (
  <LazyLoad as={as} className={className} margin="100px" root="2000" rootId={rootId} suspense={suspense}>
    {children}
  </LazyLoad>
);

export default Lazy;
