/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import PriorityNav from 'react-priority-navigation';

import Pill from './Pill';
import type { PillGroupType, PillType } from './type';

const Root = styled.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

type State = {
  selected: PillType
};

class PillsGroup extends Component<PillGroupType, State> {
  state = {
    selected: this.props.items.filter(item => item.current === true)[0]
  };

  onSelect = (item: PillType) => {
    this.setState({
      selected: item
    });
  };

  renderChildren = () =>
    this.props.items.map((item, i) => (
      <Pill
        key={i}
        item={item}
        onSelect={this.onSelect}
        selected={item === this.state.selected}
        vertical={this.props.vertical}
      />
    ));

  render() {
    if (this.props.vertical) {
      return <Root>{this.renderChildren()}</Root>;
    }
    return <PriorityNav>{this.renderChildren()}</PriorityNav>;
  }
}

export default PillsGroup;
