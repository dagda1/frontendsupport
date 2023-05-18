import type { LegacyRef } from 'react';
import * as styles from './FrontPage.css';
import cs from 'classnames';
import { Scroller } from '../Scroller/Scroller';

interface PageProps {
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
  headingRef?: LegacyRef<HTMLHeadingElement>;
  buttonRef?: LegacyRef<HTMLButtonElement>;
}
export function FrontPage({ className, innerRef, headingRef, buttonRef, ...props }: PageProps): JSX.Element {
  return (
    <section className={cs('front', styles.container, className)} ref={innerRef} {...props}>
      <h1 ref={headingRef} className={styles.heading}>
        STRUGGLING TO DELIVER FRONTEND FEATURES?
      </h1>
      <button className={styles.ctaButton} ref={buttonRef}>
        FIND OUT HOW WE CAN HELP
      </button>
      <div className={styles.scroller}>
        <Scroller />
      </div>
    </section>
  );
}
