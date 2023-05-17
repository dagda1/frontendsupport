import cs from 'classnames';
import * as styles from './HomeMobile.css';
import type { LegacyRef } from 'react';

interface HomeMobileProps {
  panelsContainer: LegacyRef<HTMLDivElement>;
}

export function HomeMobile({ panelsContainer }: HomeMobileProps): JSX.Element {
  return (
    <div ref={panelsContainer} className={styles.panels}>
      <h1>Mobile</h1>
    </div>
  );
}
