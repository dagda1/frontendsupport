import { useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { Panel } from '../components/Panel/Panel';
import { FrontPage } from '~/components/FrontPage/FrontPage';
import cs from 'classnames';
import * as styles from './Overlay.css';
import { Header } from '~/components/Header/Header';
import { useParentSize } from '@cutting/use-get-parent-size';

export function Overlay() {
  const overlay = useRef<HTMLDivElement>(null);
  const breakglass = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLSpanElement>(null);
  const imgLeft = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const panelsContainer = useRef<HTMLDivElement>(null);

  const { right = 1 } = useParentSize(breakglass, { debounceDelay: 500 });

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
    //   )
    //   .to('.scroller', { autoAlpha: 1, duration: 3 });

    if (right < 300 || document.querySelector('.pin-spacer')) {
      return;
    }

    assert(!!breakglass.current);
    assert(!!imgLeft.current);

    const ctx = gsap.context(() => {
      assert(!!panelsContainer.current);

      const panels = gsap.utils.toArray<HTMLDivElement>('.panel');

      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.panels-container',
          pin: true,
          scrub: 0.1,
          end: '+=3000',
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

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.breaking',
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: true,
            markers: true,
            // onEnter: () => gsap.to('.breaking', enterConfig),
            // onEnterBack: () => gsap.to('.breaking', enterConfig),
            // onLeave: () => gsap.to('.breaking', { y: -100, opacity: 0, duration: 0.4 }),
            // onLeaveBack: () => gsap.to('.breaking', { y: 100, opacity: 0, duration: 0.4 }),
          },
        })
        .to(breakglass.current, { justifyContent: 'space-between', ease: 'none' });
      // .to('.bglass-left', { x: -(right / 2) + offset, ease: 'none' })
      // .to('.bglass-right', { x: right / 2 - offset, ease: 'none' });

      ScrollTrigger.create({
        start: (_) => tl.scrollTrigger!.end,
        end: 'max',
        pin: '.breaking',
        pinSpacing: false,
        pinReparent: true,
      });
    });
    return () => {
      console.log(ctx);
      return ctx && ctx.revert();
    };
  }, [right]);

  return (
    <>
      <Header ctaRef={cta} />
      <main ref={mainRef}>
        <FrontPage innerRef={overlay} headingRef={heading} buttonRef={buttonRef} />

        <div ref={panelsContainer} className={cs('panels-container', styles.panels)}>
          <Panel className="blue">
            <h1>We can help if.....</h1>
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

        <div ref={breakglass} className={cs('breaking', 'breaking-glass', styles.breaking)}>
          <img ref={imgLeft} alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
          <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
          <div className={styles.services}>
            <h1>Our Services</h1>
          </div>
        </div>
      </main>
    </>
  );
}
