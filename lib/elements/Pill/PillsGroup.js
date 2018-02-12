// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Pill from './Pill';
import type { PillGroupType, PillType } from './type';

const Root = styled.div`
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

type Props = {
  ...PillGroupType,
};

type State = {
  selected: PillType,
};

class PillsGroup extends PureComponent<Props, State> {
  state = {
    selected: this.props.items.filter(item => item.current === true)[0],
  };

  onSelect = (item: PillType) => {
    this.setState({
      selected: item,
    });
  };

  // componentWillMount() {
  //   this.props.items.filter(item => item.current === true);
  // }
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

// const PillsGroup = ({ items, vertical }: Props) => (
//   <Root>
//     {items.map((item, idx) => (
//       <Pill
//         key={idx}
//         text={item.text}
//         current={item.current}
//         badge={item.badge}
//         vertical={vertical}
//       />
//     ))}
//   </Root>
// );

export default PillsGroup;
