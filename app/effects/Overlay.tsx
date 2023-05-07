import { TopNav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import { useCallback, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { Panel } from '../components/Panel/Panel';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import { H1 } from '~/components/Headings/headings';

export function Overlay() {
  const rafID = useRef<number>();
  const overlay = useRef<HTMLDivElement>(null);
  const breakglass = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLSpanElement>(null);
  const imgLeft = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    // let ctx: ReturnType<typeof gsap.context>;
    // setTimeout(() => {
    //   if (document.querySelector('.pin-spacer')) {
    //     return;
    //   }
    //   assert(!!breakglass.current);
    //   assert(!!imgLeft.current);
    //   const offset = imgLeft.current.getBoundingClientRect().width;
    //   const enterConfig = { y: 0, opacity: 1, duration: 0.4 };
    //   ctx = gsap.context(() => {
    //     const tl = gsap;
    //     // .timeline({
    //     //   scrollTrigger: {
    //     //     trigger: '.breaking',
    //     //     start: 'top 20%',
    //     //     end: 'bottom 80%',
    //     //     scrub: true,
    //     //     markers: true,
    //     //     // onEnter: () => gsap.to('.breaking', enterConfig),
    //     //     // onEnterBack: () => gsap.to('.breaking', enterConfig),
    //     //     // onLeave: () => gsap.to('.breaking', { y: -100, opacity: 0, duration: 0.4 }),
    //     //     // onLeaveBack: () => gsap.to('.breaking', { y: 100, opacity: 0, duration: 0.4 }),
    //     //   },
    //     // })
    //     // .to(breakglass.current, { justifyContent: 'space-between' });
    //     // ScrollTrigger.create({
    //     //   start: (_) => tl.scrollTrigger!.end,
    //     //   end: 'max',
    //     //   pin: '.breaking',
    //     //   pinSpacing: false,
    //     //   pinReparent: true,
    //     // });
    //     const panelsContainer = document.querySelector<HTMLDivElement>('#panels-container');
    //     assert(!!panelsContainer);
    //     const panels = gsap.utils.toArray<HTMLDivElement>('#panels-container .panel');
    //     gsap.to(panels, {
    //       xPercent: -100 * (panels.length - 1),
    //       ease: 'none',
    //       scrollTrigger: {
    //         trigger: '#panels-container',
    //         pin: true,
    //         start: 'top top',
    //         scrub: 1,
    //         snap: {
    //           snapTo: 1 / (panels.length - 1),
    //           inertia: false,
    //           duration: { min: 0.1, max: 0.1 },
    //         },
    //         end: () => '+=' + (panelsContainer.offsetWidth - innerWidth),
    //         markers: true,
    //       },
    //     });
    //   });
    // }, 50);
    // return () => {
    //   console.log(ctx);
    //   return ctx && ctx.revert();
    // };
  }, []);

  return (
    <>
      <header className="fixed bg-inherit w-full flex sm:justify-between px-2 sm:px-10 py-10 pb-5 z-10">
        <div>
          <TopNav />
        </div>
        <div>
          <span ref={cta}>
            <CTAButton />
          </span>
        </div>
      </header>
      <main ref={mainRef}>
        <FrontPage
          innerRef={overlay}
          className="border-8 border-solid sm:border-pink-500 border-green-500 md:border-yellow-500 lg:border-slate-500 xl:border-red-500 2xl:border-cyan-500"
        >
          <h1 ref={heading} className="text-6xl sm:text-8xl xl:text-9xl w-50p mt-20 lg:mt-12 xl:mt-3 text-center">
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </h1>
          <button
            className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-2xl sm:text-3xl mt-20 sm:mt-0 lg:mt-20"
            ref={buttonRef}
          >
            FIND OUT HOW WE CAN HELP
          </button>
        </FrontPage>
        <section id="panels">
          <div
            id="panels-container"
            className="h-screen flex flex-nowrap p-0 overflow-hidden"
            style={{ width: '400%' }}
          >
            {/* <Panel className="bg-breakglass">
              <div ref={breakglass} className="flex breaking justify-center flex-1">
                <img ref={imgLeft} alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
                <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
              </div>
            </Panel> */}
            <Panel className="panel2 bg-white text-black items">
              <H1>We can help if...</H1>
              <ul className="flex flex-col items-center h-full justify-evenly">
                <li>You need to get it right the first time</li>
                <li>You want access to proven industry experts you can rely on to make the right decisions</li>
                <li>You want to concentrate on features, not architecture</li>
                <li>
                  You want to empower your developers with the best frontend development setup to make them flourish
                </li>
                <li>You want to concentrate on features, not architecture</li>
                <li>Your team are more familiar with backend development.</li>
                <li>You want to remove the guesswork</li>
              </ul>
            </Panel>
            <Panel>
              <H1>Next</H1>
            </Panel>
            <Panel>
              <h2>Panel 4</h2>
            </Panel>
            <Panel>
              <h2>Panel 5</h2>
            </Panel>
          </div>
        </section>
        <section id="map" className="full-screen">
          Map
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}
