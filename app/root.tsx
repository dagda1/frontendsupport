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
    <nav>
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
      <body className="border-white border-8 md:border-purple-500 md:border-8  xl:border-green-500 xl:border-8 2xl:border-8 2xl:border-red-500  bg-black text-white  min-h-full h-full grid grid-rows-[auto,1fr,auto]">
        <header className="grid md:grid-cols-[20%,1fr,20%]">
          <div />
          <header className="border-8 border-cyan-500">
            <Nav />
          </header>
          <div />
        </header>
        <main className="border-8 border-blue-500 grid md:grid-cols-[20%,1fr,20%]">
          <div />
          <Outlet />
          <div />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="border-8 border-yellow-300 grid md:grid-cols-[20%,1fr,20%]">
          <div />
          <section>footer</section>
          <div />
        </footer>
      </body>
    </html>
  );
}
