import { motion } from 'framer-motion';

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
        <h3>FRONTEND SUPPORT</h3>
        <motion.a
          animate={{ translateX: '0%', opacity: 1 }}
          initial={{ translateX: '-120%', opacity: 0 }}
          transition={{
            delay: 2.6,
          }}
          className="ctaButton contact"
          href="https://cutting.scot"
        >
          GET IN TOUCH
        </motion.a>
      </motion.header>
      <section className="overlay">
        <motion.h1
          animate={{ translateX: '0%', opacity: 1 }}
          initial={{ translateX: '-100%', opacity: 0 }}
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
