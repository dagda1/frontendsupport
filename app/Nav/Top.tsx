import type { NavLinkProps } from '@remix-run/react';
import { NavLink } from '@remix-run/react';

const MenuItems: NavLinkProps[] = [
  { to: '/', children: 'Frontend Support' },
  { to: '/posts', children: 'Blog' },
];

export const Nav = () => {
  return (
    <nav className="text-3xl">
      <ul className="flex flex-wrap items-center mr-2">
        {MenuItems.map(({ to, children }, i) => (
          <li className="mr-2" key={i}>
            <NavLink to={to}>{children}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
