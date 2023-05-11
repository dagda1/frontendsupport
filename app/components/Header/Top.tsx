import type { NavLinkProps } from '@remix-run/react';
import { NavLink } from '@remix-run/react';
import * as styles from './Top.css';

const MenuItems: NavLinkProps[] = [
  { to: '/', children: 'Frontend Support' },
  { to: '/posts', children: 'Blog' },
];

export const TopNav = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        {MenuItems.map(({ to, children }, i) => (
          <li key={i}>
            <NavLink to={to}>{children}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
