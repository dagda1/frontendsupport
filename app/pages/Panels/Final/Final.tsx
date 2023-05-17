import { Panel } from '~/components/Panel/Panel';
import * as panelStyles from '../Panels.css';
import * as styles from './Final.css';

export function Final(): JSX.Element {
  return (
    <Panel className={styles.final}>
      <div className={panelStyles.caption2}>
        <h2>We live and breathe frontend development</h2>
      </div>
    </Panel>
  );
}
