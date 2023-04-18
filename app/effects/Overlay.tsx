import { motion } from 'framer-motion';
import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';
import Lenis from '@studio-freight/lenis';
import { useCallback, useEffect, useRef } from 'react';

const lenisStub = {
  start() {},
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

lenis.start();

export function Overlay() {
  const rafID = useRef<number>();

  const raf = useCallback((time: number) => {
    lenis.raf(time);
    rafID.current = requestAnimationFrame(raf);
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
    <div className="container">
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
        <Nav />
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

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/gsi.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/fgr.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/real_estate.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/archiviz.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/canon.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-2">
            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/watch.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop preload="none" autoPlay playsInline muted>
                <source src="/videos/dna.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>

          <div className="row-3">
            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/haunted_house.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/vitamina.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>

            <div className="video-item">
              <video loop autoPlay playsInline muted>
                <source src="/videos/houses.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
              </video>
            </div>
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
  );
}
