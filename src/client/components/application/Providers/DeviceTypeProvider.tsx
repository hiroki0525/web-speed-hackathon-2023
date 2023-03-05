import type { FC, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

export const DeviceType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const;
export type DeviceType = typeof DeviceType[keyof typeof DeviceType];

export const DeviceContext = createContext<DeviceType>(DeviceType.MOBILE);

const DeviceDetectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    !width && handleWindowResize();
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <DeviceContext.Provider value={width >= 1024 ? DeviceType.DESKTOP : DeviceType.MOBILE}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceDetectProvider;
