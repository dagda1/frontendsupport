import type { LegacyRef, ReactNode } from 'react';
import * as styles from './FrontPage.css';
import cs from 'classnames';

interface PageProps {
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
  headingRef?: LegacyRef<HTMLHeadingElement>;
  buttonRef?: LegacyRef<HTMLButtonElement>;
}
export function FrontPage({ className, innerRef, headingRef, buttonRef, ...props }: PageProps): JSX.Element {
  return (
    <section className={cs('front', styles.container, className)} ref={innerRef} {...props}>
      <h1
        ref={headingRef}
        className={styles.heading}
        // className="text-6xl sm:text-8xl xl:text-7xl 2xl:text-7xl w-50p mt-20 lg:mt-12 xl:mt-10 text-center"
      >
        STRUGGLING TO DELIVER FRONTEND FEATURES?
      </h1>
      <button
        className={styles.ctaButton}
        // className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-2xl sm:text-3xl mt-20 sm:mt-0 lg:mt-20"
        ref={buttonRef}
      >
        FIND OUT HOW WE CAN HELP
      </button>
    </section>
  );
}
