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
import painText from '~/images/paintext_wide.png';
import pain from '~/images/pain_wide.png';
import typescript from '~/images/typescript.svg';
import graphql from '~/images/graphql3.svg';
import react from '~/images/react.svg';
import lloyds from '~/images/lloyds_bank_logo.jpeg';
import waitrose from '~/images/waitrose.svg';
import volvo from '~/images/volvo.png';

export function Overlay() {
  const overlay = useRef<HTMLDivElement>(null);
  const breakglass = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const cta = useRef<HTMLSpanElement>(null);
  const imgLeft = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const panelsContainer = useRef<HTMLDivElement>(null);

  const { right = 1, width = 1 } = useParentSize(breakglass, { debounceDelay: 500 });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.scrollTo(0, 0);
  }, []);

  useIsomorphicLayoutEffect(() => {
    function main() {
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

      console.log(width);
      if (right === 1 || document.querySelector('.pin-spacer')) {
        return;
      }

      assert(!!breakglass.current);
      assert(!!imgLeft.current);

      const ctx = gsap.context(() => {
        assert(!!panelsContainer.current);

        let scrollTween = gsap.to(panelsContainer.current, {
          x: () => -(panelsContainer.current!.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: panelsContainer.current,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => '+=' + panelsContainer.current!.scrollWidth,
          },
        });

        ScrollTrigger.create({
          trigger: '.green',
          containerAnimation: scrollTween,
          start: 'center 65%',
          end: 'center 51%',
          // onEnter: () => console.log('enter'),
          // onLeave: () => console.log('leave'),
          // onEnterBack: () => console.log('enterBack'),
          // onLeaveBack: () => console.log('leaveBack'),
          // onToggle: (self) => console.log('active', self.isActive),
          id: '4',
        });

        gsap.utils.toArray<HTMLDivElement>('.parallax').forEach((text) => {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: text,
                start: 'left right',
                end: 'left left',
                scrub: true,
              },
            })
            .fromTo(text, { x: 250 }, { x: -250 }, 0);
          // .from(text.nextElementSibling, {scale: 0.8}, 0)
        });

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: '.breaking',
              start: 'top 20%',
              end: 'bottom 80%',
              scrub: 1,
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
    }

    setTimeout(() => {
      main();
    }, 1000);
  }, [right, width]);

  return (
    <>
      <Header ctaRef={cta} />
      <main>
        <FrontPage innerRef={overlay} headingRef={heading} buttonRef={buttonRef} />

        <div ref={panelsContainer} className={cs('panels-container')}>
          <Panel className="start-content">
            <div className="item">
              <h1>We can help if...</h1>
            </div>
          </Panel>
          <Panel innerRef={mainRef}>
            {/* <h1>We can help if.....</h1> */}
            <div className="chapters">
              <div className="double-images type-01">
                <figure>
                  <img alt="software pain" src={pain} />
                </figure>
                <figure className="parallax">
                  <img alt="software pain" src={painText} />
                </figure>
              </div>
              <div className="caption">
                <h2>You have to get it right first time</h2>
                <h2>You need access to industry experts</h2>
                <h2>Your team are more familiar with backend development.</h2>
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="chapters">
              <div className="triple-images">
                <figure>
                  <img alt="typescript" src={typescript} />
                </figure>
                <figure className="parallax">
                  <img alt="graphql" src={graphql} />
                </figure>
                <figure className="parallax">
                  <img alt="react" src={react} />
                </figure>
              </div>
              <div className="caption2">
                <h2>Having worked with</h2>
              </div>
            </div>
          </Panel>
          <Panel>
            <div className="chapters">
              <div className="triple-images two">
                <figure>
                  <img alt="Lloyds Bank" src={lloyds} />
                </figure>
                <figure className="parallax">
                  <img alt="Waitrosse" src={waitrose} />
                </figure>
                <figure className="parallax">
                  <img alt="volvo ocean race" src={volvo} />
                </figure>
              </div>
            </div>
          </Panel>
          <Panel className="green">
            <h1>Panel 5</h1>
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
