// @flow

import React, { type Node, Component } from 'react';
import styled from 'styled-components';

const Root = styled.caption`
  padding: 1.25rem 0;
`;

type Props = {
  children: Node,
  className?: string
};

class Caption extends Component<Props> {
  // state = {};
  render() {
    return (
      <Root className={this.props.className}>
        {this.props.children}
      </Root>
    );
  }
}

export default Caption;
