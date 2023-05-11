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
    let ctx: ReturnType<typeof gsap.context>;
    setTimeout(() => {
      if (document.querySelector('.pin-spacer')) {
        return;
      }

      // assert(!!breakglass.current);
      // assert(!!imgLeft.current);
      ctx = gsap.context(() => {
        // const tl = gsap;
        // .timeline({
        //   scrollTrigger: {
        //     trigger: '.breaking',
        //     start: 'top 20%',
        //     end: 'bottom 80%',
        //     scrub: true,
        //     markers: true,
        //     // onEnter: () => gsap.to('.breaking', enterConfig),
        //     // onEnterBack: () => gsap.to('.breaking', enterConfig),
        //     // onLeave: () => gsap.to('.breaking', { y: -100, opacity: 0, duration: 0.4 }),
        //     // onLeaveBack: () => gsap.to('.breaking', { y: 100, opacity: 0, duration: 0.4 }),
        //   },
        // })
        // .to(breakglass.current, { justifyContent: 'space-between' });
        // ScrollTrigger.create({
        //   start: (_) => tl.scrollTrigger!.end,
        //   end: 'max',
        //   pin: '.breaking',
        //   pinSpacing: false,
        //   pinReparent: true,
        // });
        const panelsContainer = document.querySelector<HTMLDivElement>('.panels-container');
        assert(!!panelsContainer);
        const panels = gsap.utils.toArray<HTMLDivElement>('.panel');

        const scrollTween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.panels-container',
            pin: true,
            scrub: 0.1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: '+=3000',
            markers: true,
          },
        });

        ScrollTrigger.create({
          trigger: '.green',
          containerAnimation: scrollTween,
          start: 'center 65%',
          end: 'center 51%',
          onEnter: () => console.log('enter'),
          onLeave: () => console.log('leave'),
          onEnterBack: () => console.log('enterBack'),
          onLeaveBack: () => console.log('leaveBack'),
          onToggle: (self) => console.log('active', self.isActive),
          id: '4',
        });
      });
    }, 500);
    return () => {
      console.log(ctx);
      return ctx && ctx.revert();
    };
  }, []);

  return (
    <>
      {/* <header className="fixed bg-inherit w-full flex sm:justify-between px-2 sm:px-10 py-10 pb-5 z-10">
        <div>
          <TopNav />
        </div>
        <div>
          <span ref={cta}>
            <CTAButton />
          </span>
        </div>
      </header> */}
      <main ref={mainRef}>
        <FrontPage innerRef={overlay}>
          <h1>Front</h1>
        </FrontPage>

        <div className="panels-container">
          <Panel className="bg-breakglass">
            <h1>Panel 1</h1>
          </Panel>

          <Panel className="white">
            <h1>Panel 2</h1>
          </Panel>

          <Panel className="gray">
            <h1>Panel 3</h1>
          </Panel>
          <Panel className="green">
            <h1>Panel 4</h1>
          </Panel>
        </div>

        <div className="final">
          <h1>FINAL</h1>
        </div>
      </main>
    </>
  );
}
