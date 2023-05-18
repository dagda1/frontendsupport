import type { Ref } from 'react';
import { Panel } from '~/components/Panel/Panel';
import painText from '~/images/paintext_wide.png';
import pain from '~/images/pain_wide.png';
import * as styles from './HelpPanel.css';
import * as panelStyles from '../Panels.css';
import cs from 'classnames';

interface HelpPanelProps {
  innerRef: Ref<HTMLDivElement>;
}

export function HelpPanel({ innerRef }: HelpPanelProps): JSX.Element {
  return (
    <Panel className={styles.main} innerRef={innerRef}>
      <div className={panelStyles.imageHolder}>
        <div className={styles.doubleImages}>
          <figure>
            <img alt="software pain" src={pain} />
          </figure>
          <figure className="parallax">
            <img alt="software pain" src={painText} />
          </figure>
        </div>

        <div className={cs(styles.headings, panelStyles.caption)}>
          <h2>You have to get it right first time</h2>
          <h2>You need access to industry experts</h2>
          <h2>Your team are more familiar with backend development.</h2>
        </div>
      </div>
    </Panel>
  );
}
