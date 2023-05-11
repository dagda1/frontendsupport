import type { LegacyRef } from 'react';
import { CTAButton } from '../CTAButton/CTAButton';
import { TopNav } from './Top';
import * as styles from './Header.css';

interface HeaderProps {
  ctaRef: LegacyRef<HTMLSpanElement>;
}

export function Header({ ctaRef }: HeaderProps): JSX.Element {
  return (
    <header className={styles.container}>
      <div>
        <TopNav />
      </div>
      <div>
        <span ref={ctaRef}>
          <CTAButton link="/contact">GET IN TOUCH</CTAButton>
        </span>
      </div>
    </header>
  );
}
