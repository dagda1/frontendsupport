import cs from 'classnames';
import { Panel } from '~/components/Panel/Panel';
import * as panelStyles from '../Panels.css';
import backstage from '~/images/backstage.png';
import ember from '~/images/emberjs.png';
import bigtest from '~/images/bigtest.png';

export function OSS(): JSX.Element {
  return (
    <Panel>
      <div className={panelStyles.imageHolder}>
        <div className={cs(panelStyles.tripleImages, 'oss')}>
          <figure>
            <img alt="ember" src={ember} />
          </figure>
          <figure className="parallax">
            <img alt="Backstage" src={backstage} />
          </figure>
          <figure className="parallax">
            <img alt="Bigtest" src={bigtest} />
          </figure>
        </div>
        <div className={panelStyles.caption2}>
          <h2>Having worked with...</h2>
        </div>
      </div>
    </Panel>
  );
}
