import React from 'react';
import styled from 'styled-components';
import { Pill, Tabs } from '@gssfed/vital-ui-kit-react';

import Overview from '../Overview';
import Form from '../Form';

const Top = styled.div``;

class Main extends React.PureComponent {
  state = {};

  render() {
    return (
      <Top>
        <Pill.Group default={2}>
          <Pill id={1} label="Getting Started" badge="6" />
          <Pill id={2} label="Showcase" badge="23" />
          <Pill id={3} label="More Coming soon" />
        </Pill.Group>
        <Tabs>
          <Tabs.Tab
            label="Overview"
            badge={5}
            panel={(
              <Tabs.Panel>
                <Overview />
              </Tabs.Panel>
          )}
          />
          <Tabs.Tab label="Form" badge={1} panel={<Form />} />
          <Tabs.Tab label="Components" badge={100} panel="yoyo" />
        </Tabs>
      </Top>
    );
  }
}

export default Main;
