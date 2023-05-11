import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import rehypeStyles from './rehype.css';
import katex from 'katex/dist/katex.min.css';
import tailwindCss from '~/tailwind.css';
import styles from '~/styles.css';
import displacement from '~/images/displacement.jpg';
import normalMap from '~/images/NormalMap2.png';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Frontend Support',
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
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black text-white">
        <Outlet />
        {/* <ScrollRestoration /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
