import classNames from 'classnames';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { DeviceType } from '../../../foundation/GetDeviceType';
import { Image } from '../../../foundation/Image';

import * as styles from './FooterList.styles';

const FOOTER_LINK_ITEMS = ['利用規約', 'お問い合わせ', 'Q&A', '運営会社', 'オーガニックとは'] as const;

export const FooterList: FC<{ deviceType: DeviceType }> = ({ deviceType }) => {
  return (
    <>
      <ul
        className={classNames(styles.itemList, {
          [styles.itemList__desktop]: deviceType === DeviceType.DESKTOP,
          [styles.itemList__mobile]: deviceType === DeviceType.MOBILE,
        })}
      >
        {FOOTER_LINK_ITEMS.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
      <NavLink to="/">
        <Image src="/icons/logo.svg" />
      </NavLink>
    </>
  );
};
