import type { NavLinkProps } from '@remix-run/react';
import { NavLink } from '@remix-run/react';
import cs from 'classnames';

const MenuItems: NavLinkProps[] = [
  { to: '/', children: 'Frontend Support' },
  { to: '/posts', children: 'Blog' },
];

export const TopNav = () => {
  return (
    <nav className="text-2xl sm:text-3xl">
      <ul className="flex flex-wrap items-center mr-2">
        {MenuItems.map(({ to, children }, i) => (
          <li className={cs(i != MenuItems.length - 1 ? 'mr-2 sm:mr-5' : undefined)} key={i}>
            <NavLink to={to}>{children}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
