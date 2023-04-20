import { motion } from 'framer-motion';
import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import Lenis from '@studio-freight/lenis';
import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const lenisStub = {
  start: undefined,
  raf(time: number) {},
  stop() {},
};

let lenis =
  typeof window === 'undefined'
    ? lenisStub
    : new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        mouseMultiplier: 1,
      });

export function Overlay() {
  const rafID = useRef<number>();
  const overlay = useRef<HTMLDivElement>(null);
  const works = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const raf = useCallback((time: number) => {
    lenis.raf(time);
    rafID.current = requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (typeof lenis.start === 'undefined') {
      return;
    }

    lenis.start();
  }, []);

  useEffect(() => {
    rafID.current = requestAnimationFrame(raf);

    return () => {
      if (!rafID.current) {
        return;
      }

      cancelAnimationFrame(rafID.current);

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        mouseMultiplier: 1,
      });

      lenis.stop();
    };
  }, [raf]);

  useEffect(() => {
    if (!overlay.current) {
      return;
    }

    if (!works.current) {
      return;
    }

    // const panels = [overlay.current, works.current];
    // panels.forEach((panel, index) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: 'top top',
    //     end: 'bottom top',
    //     // pin: true,
    //     // pinSpacing: false,
    //     // snap: {
    //     //   snapTo: 1,
    //     //   duration: { min: 0.3, max: 0.7 },
    //     //   ease: 'power2.inOut',
    //     //   delay: 0,
    //     // },
    //     // markers: true,
    //   });
    // });
  });

  // useEffect(() => {
  //   if (!works.current) {
  //     return;
  //   }

  //   let worksST = ScrollTrigger.create({
  //     trigger: works.current,
  //     start: 'top top',
  //   });

  //   ScrollTrigger.create({
  //     trigger: works.current,
  //     start: 'top center',
  //     end: 'bottom center',
  //   });

  //   if (!buttonRef.current) {
  //     return;
  //   }

  //   const scroll = (e: MouseEvent) => {
  //     e.preventDefault();
  //     gsap.to(window, { duration: 1, scrollTo: worksST.start, overwrite: 'auto' });
  //   };

  //   buttonRef.current.addEventListener('click', scroll);

  //   const button = buttonRef.current;

  //   return () => {
  //     button?.removeEventListener('click', scroll);
  //   };
  // }, []);

  return (
    <>
      <motion.header
        className="flex justify-between pt-10 pb-10"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 60, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 6,
          delay: 4,
        }}
      >
        <motion.div>
          <Nav />
        </motion.div>
        <motion.span
          animate={{ translateX: '0%', opacity: 1 }}
          initial={{ translateX: '-120%', opacity: 0 }}
          transition={{
            delay: 2.6,
          }}
        >
          <CTAButton />
        </motion.span>
      </motion.header>
      <main>
        <section ref={overlay} className="overlay grid place-content-center h-full">
          <motion.h1
            animate={{ translateX: '0%', opacity: 1 }}
            initial={{ translateX: '-100%', opacity: 0 }}
            className="text-9xl"
            transition={{
              duration: 1.8,
              delay: 2.5,
            }}
          >
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </motion.h1>
          <motion.button
            animate={{ translateX: '0%', opacity: 1 }}
            initial={{ translateX: '-120%', opacity: 0 }}
            transition={{
              delay: 2.6,
            }}
            className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-4xl mt-20 place-self-center"
            // onClick={() => {
            //   window.open('https://andersonmancini.dev', 'tab');
            // }}
            ref={buttonRef}
          >
            FIND OUT HOW WE CAN HELP
          </motion.button>
        </section>
        <section ref={works} className="works h-full">
          <h3>RECENT WORKS</h3>
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
