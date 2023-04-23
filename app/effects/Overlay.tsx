import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import Lenis from '@studio-freight/lenis';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useLayoutEffect(() => {
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

    // gsap.to(breakglass.current, {
    //   autoAlpha: 1,
    //   scrollTrigger: {
    //     trigger: '.left',
    //     start: '50% top',
    //     scrub: true,
    //     markers: true,
    //   },
    // });
    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.breaking',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     scrub: true,
    //     markers: true,
    //   },
    // });
    // .to('.bglass-left', { xPercent: -200 })
    // .to('.bglass-right', { xPercent: 200 });

    let sections = [overlay.current];
    const sectionContent = gsap.utils.toArray<HTMLElement>('.content');

    for (const section of sections) {
      ScrollTrigger.create({
        trigger: section,
        start: 'center center',
        end: '+=' + window.innerHeight / 2,
      });
    }

    gsap.set(sectionContent, {
      opacity: 0,
      y: 100,
    });

    const enterConfig = { y: 0, opacity: 1, duration: 0.4 };

    for (const content of sectionContent) {
      ScrollTrigger.create({
        trigger: content,
        start: 'top 80%',
        end: 'bottom 40%',
        onEnter: () => gsap.to(content, enterConfig),
        onEnterBack: () => gsap.to(content, enterConfig),
        onLeave: () => gsap.to(content, { y: -100, opacity: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to(content, { y: 100, opacity: 0, duration: 0.4 }),
        markers: true,
      });
    }
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
        <section ref={breakglass} className="breakglass grid place-content-center h-full">
          <div className="flex breaking content">
            <img alt="breaking glass left" className="bglass-left" src={breakglassLeft} />
            <img alt="breaking glass right" className="bglass-right" src={breakglassRight} />
          </div>
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
