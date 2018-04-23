import React from 'react';
import styled from 'styled-components';
import { Pill } from '@gssfed/vital-ui-kit-react';

const Top = styled.div`
`;

class Main extends React.PureComponent {
  state = {  }
  render() {
    return (
      <Top>
        <Pill.Group default={2}>
          <Pill id={1} label="Pending recipet" badge="6" />
          <Pill id={2} label="To be handled" badge="23" />
          <Pill id={3} label="Recall operation" />
          <Pill id={4} label="Urgency Level Changed" />
          <Pill id={5} label="Recevied Login" badge="99+" />
        </Pill.Group>
      </Top>
    );
  }
}

export default Main;
