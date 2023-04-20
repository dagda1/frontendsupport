import { motion } from 'framer-motion';
import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import Lenis from '@studio-freight/lenis';
import { useCallback, useEffect, useRef } from 'react';

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

  return (
    <>
      <div className="relative z-10">
        <motion.header
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 6,
            delay: 6,
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
        <section className="overlay">
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
            className="ctaButton"
            onClick={() => {
              window.open('https://andersonmancini.dev', 'tab');
            }}
          >
            FIND OUT HOW WE CAN HELP
          </motion.button>
        </section>
        <section className="works">
          <h3>RECENT WORKS</h3>
          <div className="gallery-container">
            <div className="row-2">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-3">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-3">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-2">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-3">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-3">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-2">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-3">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>

            <div className="row-3">
              <div className="video-item">Video</div>

              <div className="video-item">Video</div>

              <div className="video-item">Video</div>
            </div>
          </div>
        </section>
        <footer>footer</footer>
      </div>
    </>
  );
}
