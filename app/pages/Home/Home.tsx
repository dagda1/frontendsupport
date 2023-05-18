import { useRef } from 'react';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { Header } from '~/components/Header/Header';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

export function Home(): JSX.Element {
  const ctaRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Header ctaRef={ctaRef} />
      <main>
        <FrontPage headingRef={headingRef} buttonRef={buttonRef} />
        <HomeDesktop />
        <HomeMobile />
      </main>
    </>
  );
}
