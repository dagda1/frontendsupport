import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import tailwindCss from '~/tailwind.css';
import { Nav } from './Nav/Top';
import styles from '~/styles.css';
import displacement from '~/images/displacement.jpg';
import normalMap from '~/images/NormalMap2.png';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindCss },
  {
    rel: 'stylesheet',
    href: rehypeStyles,
  },
  {
    rel: 'stylesheet',
    href: katex,
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
  {
    rel: 'preload',
    href: displacement,
    as: 'image',
  },
  {
    rel: 'preload',
    href: normalMap,
    as: 'image',
  },
];

export default function App() {
  return (
    <html lang="en" className="h-full m-0 p-0">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black text-white  grid grid-rows-[auto,1fr,auto] px-4 md:px-6 lg:px-[10%] xl:px-[20%] 2xl:px-[25%] overflow-x-hidden h-full m-0 p-0">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
