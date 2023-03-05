import { useContext } from 'react';

import { DeviceContext } from '../components/application/Providers/DeviceTypeProvider';

const useDeviceDetect = () => useContext(DeviceContext);

export default useDeviceDetect;
