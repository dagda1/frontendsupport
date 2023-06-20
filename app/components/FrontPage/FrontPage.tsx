import type { LegacyRef } from 'react';
import * as styles from './FrontPage.css';
import cs from 'classnames';
import { Scroller } from '../Scroller/Scroller';
import { Heading } from '@cutting/component-library';

interface PageProps {
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
  headingRef?: LegacyRef<HTMLHeadingElement>;
  buttonRef?: LegacyRef<HTMLButtonElement>;
}
export function FrontPage({ className, innerRef, headingRef, buttonRef, ...props }: PageProps): JSX.Element {
  return (
    <section className={cs('front', styles.container, className)} ref={innerRef} {...props}>
      <Heading level="1" ref={headingRef} className={styles.heading}>
        STRUGGLING TO DELIVER FRONTEND FEATURES?
      </Heading>
      <button className={styles.ctaButton} ref={buttonRef}>
        FIND OUT HOW WE CAN HELP
      </button>
      <div className={styles.scroller}>
        <Scroller />
      </div>
    </section>
  );
}
