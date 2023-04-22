import { motion } from 'framer-motion';
import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import Lenis from '@studio-freight/lenis';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const lenisStub = {
  start: undefined,
  raf(time: number) {},
  stop() {},
};

// let lenis =
//   typeof window === 'undefined'
//     ? lenisStub
//     : new Lenis({
//         duration: 1.2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
//         direction: 'vertical',
//         gestureDirection: 'vertical',
//         mouseMultiplier: 1,
//       });

export function Overlay() {
  const rafID = useRef<number>();
  const overlay = useRef<HTMLDivElement>(null);
  const works = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      heading.current,
      { translateX: '-100%', opacity: 0 },
      { translateX: '0%', opacity: 1, duration: 1.8, delay: 0.5 },
    );

    gsap.fromTo(
      buttonRef.current,
      {
        translateX: '-120%',
        opacity: 0,
      },
      {
        translateX: '0%',
        opacity: 1,
        delay: 2.6,
      },
    );

    gsap.fromTo(
      cta.current,
      {
        translateX: '-120%',
        opacity: 0,
      },
      {
        translateX: '0%',
        opacity: 1,
        delay: 2.6,
      },
    );

    gsap.fromTo(
      'header',
      {
        y: 60,
        opacity: 0,
      },
      { y: 0, opacity: 1, delay: 2, ease: Bounce.easeOut, duration: 2 },
    );
  }, []);

  return (
    <>
      <header className="flex justify-between pt-10 pb-10">
        <div>
          <Nav />
        </div>
        <span ref={cta}>
          <CTAButton />
        </span>
      </header>
      <main>
        <section ref={overlay} className="grid place-content-center h-full">
          <h1 ref={heading} className="text-9xl">
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </h1>
          <button
            className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-4xl mt-20 place-self-center"
            ref={buttonRef}
          >
            FIND OUT HOW WE CAN HELP
          </button>
        </section>
        <section ref={works} className="works h-full">
          <h3>RECENT WORKS</h3>
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
