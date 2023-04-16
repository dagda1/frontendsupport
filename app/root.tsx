import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import stylesheet from '~/tailwind.css';
import { Nav } from './Nav/Top';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

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
      <body className="border-white border-8 md:border-purple-500 md:border-8 lg:border-gray-500 lg:border-8  xl:border-green-500 xl:border-8 2xl:border-8 2xl:border-red-500  bg-black text-white  min-h-full h-full grid grid-rows-[auto,1fr,auto] px-4 md:px-6 lg:px-[10%] xl:px-[20%] 2xl:px-[25%]">
        <header className="grid">
          <header className="border-8 border-cyan-500">
            <Nav />
          </header>
        </header>
        <main className="border-8 border-blue-500 grid">
          <Outlet />
        </main>
        <footer className="border-8 border-yellow-300 grid">
          <section>footer</section>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
