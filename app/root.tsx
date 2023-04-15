import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, NavLink } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import stylesheet from '~/tailwind.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

const Nav = () => {
  return (
    <header>
      <nav className="border-8 border-cyan-500">
        <ul className="flex flex-wrap items-center">
          <li className="mr-2">
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">Articles</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  {
    rel: 'stylesheet',
    href: rehypeStyles,
  },
  {
    rel: 'stylesheet',
    href: katex,
  },
];

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="border-8 border-red-500 min-h-full h-full grid grid-rows-[auto,1fr,auto]">
        <header>
          <Nav />
        </header>
        <main className="border-8 border-blue-500">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="border-8 border-yellow-300">
          <section>footer</section>
        </footer>
      </body>
    </html>
  );
}
