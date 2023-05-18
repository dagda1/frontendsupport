import { Panel } from '~/components/Panel/Panel';
import * as panelStyles from '../Panels.css';
import * as styles from './Final.css';
import cs from 'classnames';

export function Final(): JSX.Element {
  return (
    <Panel className={cs('final', styles.final)}>
      <div className={panelStyles.caption2}>
        <h2>We live and breathe frontend development</h2>
      </div>
    </Panel>
  );
}
