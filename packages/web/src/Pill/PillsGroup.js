/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { type Node, Component } from 'react';
import styled from 'styled-components';
import PriorityNav from 'react-priority-navigation';

const Root = styled.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

type Props = {
  children: Node,
  /** Vertical display */
  vertical?: boolean,
  /** The default active, match with pill's id */
  default?: string | number | void
};

type State = {
  current: string | number | void
};

class PillsGroup extends Component<Props, State> {
  static defaultProps = {
    vertical: false,
    current: null
  };

  state = {
    current: this.props.default
  };

  onSelect = (id: string | number) => {
    this.setState({
      current: id
    });
  };

  renderChildren = () =>
    React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        current: this.state.current,
        onSelect: this.onSelect,
        vertical: this.state.vertical
      })
    );

  render() {
    const { vertical } = this.props;
    if (vertical) {
      return (
        <Root>
          {this.renderChildren()}
        </Root>
);
    }
    return (
      <PriorityNav vertical={vertical} current={this.state.current}>
        {this.renderChildren()}
      </PriorityNav>
    );
  }
}

export default PillsGroup;
