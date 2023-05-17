import cs from 'classnames';
import { Panel } from '~/components/Panel/Panel';
import { ExternalLink } from '@cutting/component-library';
import typescript from '~/images/typescript.svg';
import graphql from '~/images/graphql3.svg';
import react from '~/images/react.svg';
import * as panelStyles from '../Panels.css';

export function Frameworks(): JSX.Element {
  return (
    <Panel>
      <div className={panelStyles.imageHolder}>
        <div className={cs(panelStyles.tripleImages, 'frameworks')}>
          <figure>
            <img alt="typescript" src={typescript} />
          </figure>
          <figure className="parallax">
            <img alt="graphql" src={graphql} />
          </figure>
          <figure className="parallax">
            <img alt="react" src={react} />
          </figure>
        </div>
        <div className={panelStyles.caption2}>
          <h2>
            With <ExternalLink href="https://cutting.scot/oss">350+ merged pull requests</ExternalLink> into...
          </h2>
        </div>
      </div>
    </Panel>
  );
}
