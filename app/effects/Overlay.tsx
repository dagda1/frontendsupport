import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';
import { assert } from 'assert-ts';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { Content } from './Content';

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
    // let sections = gsap.utils.toArray<HTMLDivElement>('.content');

    // const sectionContent = gsap.utils.toArray<HTMLElement>('.content > *');

    // console.log(sections);

    // console.log(sectionContent);

    // for (const section of sections) {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: 'center center',
    //     end: '+=' + window.innerHeight / 2,
    //     pin: true,
    //     // markers: true,
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
    //     start: 'center 80%',
    //     end: 'bottom 40%',
    //     onEnter: () => gsap.to(content, enterConfig),
    //     onEnterBack: () => gsap.to(content, enterConfig),
    //     onLeave: () => gsap.to(content, { y: -100, opacity: 0, duration: 0.4 }),
    //     onLeaveBack: () => gsap.to(content, { y: 100, opacity: 0, duration: 0.4 }),
    //     markers: true,
    //   });
    // }

    // let sections = gsap.utils.toArray('.content');

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.container',
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: '+=3500',
    //   },
    // });

    // if (!imgLeft.current) {
    //   return;
    // }

    setTimeout(() => {
      if (document.querySelector('.pin-spacer')) {
        return;
      }

      assert(!!breakglass.current);

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.breaking',
            start: 'top 20%',
            end: 'bottom 40%',
            scrub: true,
            markers: true,
          },
        })
        .to('.bglass-left', { xPercent: -50 }, 0)
        .to('.bglass-right', { xPercent: 300 }, 0);

      ScrollTrigger.create({
        start: (_) => tl.scrollTrigger!.end,
        end: 'max',
        pin: '.breaking',
        pinSpacing: false,
        pinReparent: true,
      });

      const panelsContainer = document.querySelector<HTMLDivElement>('#panels-container');

      assert(!!panelsContainer);

      const panels = gsap.utils.toArray<HTMLDivElement>('#panels-container .panel');

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#panels-container',
          pin: true,
          start: 'top top',
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          end: () => {
            console.log(panelsContainer.offsetWidth - innerWidth);
            return '+=' + (panelsContainer.offsetWidth - innerWidth);
          },
          markers: true,
        },
      });
    }, 500);
  }, []);

  return (
    <>
      {/* <header className="fixed bg-inherit w-full max-w-90p flex justify-between pt-10 pb-5">
        <div>
          <Nav />
        </div>
        <span ref={cta}>
          <CTAButton />
        </span>
      </header> */}
      <main>
        <section
          ref={overlay}
          className="overlay border-10 lg:border-slate-500 xl:border-red-500 2xl:border-cyan-500 items-center xl:justify-center"
        >
          <h1 ref={heading} className="text-9xl w-50p text-center">
            STRUGGLING TO DELIVER FRONTEND FEATURES?
          </h1>
          <button
            className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-4xl mt-20"
            ref={buttonRef}
          >
            FIND OUT HOW WE CAN HELP
          </button>
        </section>
        <section id="panels">
          <div id="panels-container" style={{ width: '500%' }}>
            <article id="panel-1" className="panel full-screen red">
              <div className="container">
                <div className="row">
                  <div ref={breakglass} className="flex breaking content">
                    <img alt="breaking glass left" className="bglass-left" src={breakglassLeft} />
                    <img alt="breaking glass right" className="bglass-right" src={breakglassRight} />
                  </div>
                </div>
              </div>
            </article>
            <article id="panel-2" className="panel full-screen orange">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 2</h2>

                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of
                      Lorem Ipsum.
                    </p>

                    <div className="panels-navigation">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-1" className="anchor">
                          Prev
                        </a>
                      </div>
                      <div className="nav-panel" data-sign="plus">
                        <a href="#panel-3" className="anchor">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article id="panel-3" className="panel full-screen purple">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 3</h2>

                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of
                      Lorem Ipsum.
                    </p>

                    <div className="panels-navigation">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-2" className="anchor">
                          Prev
                        </a>
                      </div>
                      <div className="nav-panel" data-sign="plus">
                        <a href="#panel-4" className="anchor">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article id="panel-4" className="panel full-screen green">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 4</h2>

                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of
                      Lorem Ipsum.
                    </p>

                    <div className="panels-navigation">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-3" className="anchor">
                          Prev
                        </a>
                      </div>
                      <div className="nav-panel" data-sign="plus">
                        <a href="#panel-5" className="anchor">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article id="panel-5" className="panel full-screen gray">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img src="" alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <h2>Panel 5</h2>

                    <p className="step-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of
                      Lorem Ipsum.
                    </p>

                    <div className="panels-navigation text-right">
                      <div className="nav-panel" data-sign="minus">
                        <a href="#panel-4" className="anchor">
                          Prev
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
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
