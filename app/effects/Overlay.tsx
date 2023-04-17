import { motion } from 'framer-motion';
import { Nav } from '~/Nav/Top';
import { CTAButton } from '~/components/CTAButton/CTAButton';

export function Overlay() {
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
      <footer>footer</footer>
    </div>
  );
}
