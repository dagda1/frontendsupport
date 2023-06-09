import type { Ref } from 'react';
import breakglassLeft from '~/effects/breakglass-left.png';
import breakglassRight from '~/effects/breakglass-right.png';
import cs from 'classnames';
import * as styles from './BreakingGlass.css';

interface BreakGlassProps {
  breakglassRef: Ref<HTMLDivElement>;
  className?: string;
}

export function BreakGlass({ breakglassRef, className }: BreakGlassProps): JSX.Element {
  return (
    <div ref={breakglassRef} className={cs('breaking', 'breaking-glass', styles.breaking, className)}>
      <img alt="breaking glass left" className="bglass-left glass" src={breakglassLeft} />
      <img alt="breaking glass right" className="bglass-right glass" src={breakglassRight} />
      <div className={styles.services}>
        <h1>Our Services</h1>
      </div>
    </div>
  );
}
