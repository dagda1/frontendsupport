import { Panel } from '~/components/Panel/Panel';
import * as styles from './Intro.css';
import * as panelStyles from '../Panels.css';

export function Intro(): JSX.Element {
  return (
    <Panel className={styles.startContent}>
      <div className={styles.intro}>
        <div className={panelStyles.caption2}>
          <h2>We can help if.....</h2>
        </div>
      </div>
    </Panel>
  );
}
