// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import type { PillType } from './type';

const Root = styled.div`
  background-color: ${props => (props.selected ? '#2A4880' : 'transparent')};
  color: ${props => (props.selected ? '#fff' : '#456296')};
  font-size: 1rem;
  position: relative;
  z-index: 5;
  display: ${props => (props.vertical ? 'block' : 'inline-block')};
  padding: 6px 22px 7px;
  line-height: 1.3;
  border-radius: 2.16667rem;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: ${props => props.vertical ? '0' : '10px'};
  margin-right: ${props => props.vertical ? '0' : '10px'};

  &:hover {
    background-color: #d8e2f5;
    color: #456296;
  }

  &:active {
    background-color: #c3d1eb;
    color: #456296;
  }
`;

const PillBadge = styled(Badge)`
  margin: 0 -5px 0 4px;
`;

type Props = {
  item: PillType,
  selected?: boolean,
  vertical?: boolean,
  onSelect: (item: PillType) => mixed,
};

class Pill extends PureComponent<Props> {

  handleSelect = () => {
    this.props.onSelect(this.props.item);
  }

  render() {

    const { vertical, selected, item, ...props } = this.props;
    return (
      <Root
        vertical={vertical}
        selected={selected}
        onClick={this.handleSelect}
        {...props}>
        {item.text}
        {item.badge && <PillBadge label={item.badge} />}
      </Root>
    );
  }
}

export default Pill;
