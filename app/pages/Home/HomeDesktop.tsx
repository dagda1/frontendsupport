import cs from 'classnames';
import * as styles from './HomeDesktop.css';
import type { LegacyRef } from 'react';
import { useRef } from 'react';
import { HelpPanel } from '../Panels/Help/HelpPanel';
import { OSS } from '../Panels/OSS/OSS';

interface HomeDesktopProps {
  panelsContainer: LegacyRef<HTMLDivElement>;
}

export function HomeDesktop({ panelsContainer }: HomeDesktopProps): JSX.Element {
  const dimensionsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={panelsContainer} className={cs('panels-container', styles.panels)}>
      <HelpPanel innerRef={dimensionsRef} />
      <OSS />
    </div>
  );
}
