import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import Lenis from '@studio-freight/lenis';
import { useCallback, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';

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
  const breakglass = useRef<HTMLDivElement>(null);
  const works = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLSpanElement>(null);
  const imgLeft = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ markers: true });
    window.scrollTo(0, 0);
  }, []);

  useIsomorphicLayoutEffect(() => {
    // const timeline = gsap.timeline();
    // timeline
    //   .fromTo(
    //     heading.current,
    //     { translateX: '-100%', opacity: 0 },
    //     { translateX: '0%', opacity: 1, duration: 1.8, delay: 0.5 },
    //   )
    //   .fromTo(
    //     buttonRef.current,
    //     {
    //       translateX: '-120%',
    //       opacity: 0,
    //     },
    //     {
    //       translateX: '0%',
    //       opacity: 1,
    //     },
    //   )
    //   .fromTo(
    //     cta.current,
    //     {
    //       translateX: '-120%',
    //       opacity: 0,
    //     },
    //     {
    //       translateX: '0%',
    //       opacity: 1,
    //     },
    //   )
    //   .fromTo(
    //     'header',
    //     {
    //       y: -60,
    //       opacity: 0,
    //     },
    //     { y: 0, opacity: 1, ease: Bounce.easeOut, duration: 1 },
    //   );

    // let sections = [overlay.current, works.current];
    // const sectionContent = gsap.utils.toArray<HTMLElement>('.content');

    // for (const section of sections) {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: 'center center',
    //     end: '+=' + window.innerHeight / 2,
    //   });
    // }

    // gsap.set(sectionContent, {
    //   opacity: 0,
    //   y: 100,
    // });

    // const enterConfig = { y: 0, opacity: 1, duration: 0.4 };

    // for (const content of sectionContent) {
    //   ScrollTrigger.create({
    //     trigger: content,
    //     start: 'top top',
    //     end: 'bottom 40%',
    //     onEnter: () => gsap.to(content, enterConfig),
    //     onEnterBack: () => gsap.to(content, enterConfig),
    //     onLeave: () => gsap.to(content, { y: -100, opacity: 0, duration: 0.4 }),
    //     onLeaveBack: () => gsap.to(content, { y: 100, opacity: 0, duration: 0.4 }),
    //     markers: true,
    //   });
    // }

    if (!imgLeft.current) {
      return;
    }

    const offset = imgLeft.current.getBoundingClientRect().width;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.breaking',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
        },
      })
      .to('.bglass-left', { x: -(window.innerWidth / 2) + offset, duration: 4 })
      .to('.bglass-right', { x: window.innerWidth / 2 - offset, duration: 4 });

    ScrollTrigger.create({
      start: (_) => tl.scrollTrigger!.end,
      end: 'max',
      pin: '.breaking',
      pinSpacing: false,
    });
  }, []);

  return (
    <>
      <header className="flex justify-between pt-10 pb-5">
        <div>
          <Nav />
        </div>
        <span ref={cta}>
          <CTAButton />
        </span>
      </header>
      <main>
        <section
          ref={overlay}
          className="grid border-2 lg:border-slate-500 xl:border-red-500 2xl:border-cyan-500 xl:place-content-center"
        >
          <h1 ref={heading} className="text-9xl">
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </h1>
          <button
            className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-4xl place-self-center"
            ref={buttonRef}
          >
            FIND OUT HOW WE CAN HELP
          </button>
        </section>
        <section ref={breakglass}>
          <div className="breaking content" style={{ border: '10px  solid red' }}>
            <img ref={imgLeft} alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
            <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
          </div>
        </section>
        <section ref={works}>
          <div>
            <h2>works</h2>
          </div>
        </section>
        <section ref={works}>
          <div>
            <h2>bum bum</h2>
          </div>
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
