/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import Pill from './Pill';
import type { PillGroupType, PillType } from './type';

const Root = styled.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

type State = {
  selected: PillType,
};

class PillsGroup extends Component<PillGroupType, State> {
  state = {
    selected: this.props.items.filter(item => item.current === true)[0],
  };

  onSelect = (item: PillType) => {
    this.setState({
      selected: item,
    });
  };

  render() {
    return (
      <Root>
        {this.props.items.map((item, idx) => (
          <Pill
            key={idx}
            item={item}
            onSelect={this.onSelect}
            selected={item === this.state.selected}
            vertical={this.props.vertical}
          />
        ))}
      </Root>
    );
  }
}

export default PillsGroup;
