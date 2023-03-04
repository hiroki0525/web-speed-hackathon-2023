import type { FC, ReactNode } from 'react';
import type { LazyLoadProps } from 'react-dom-lazyload-component';
import LazyLoad from 'react-dom-lazyload-component';

type LazyProps = Pick<LazyLoadProps, 'as' | 'suspense'> & {
  readonly className?: string;
  readonly children: ReactNode;
  readonly id?: string;
};

const Lazy: FC<LazyProps> = ({ as, children, className, id, suspense }) => (
  <LazyLoad
    as={as}
    className={className}
    // fallback={<LoadingIcon />}
    id={id}
    suspense={suspense}
  >
    {children}
  </LazyLoad>
);

export default Lazy;
