/**
 * @flow
 * Copyright © 2017 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

import Droplist from './Droplist';
import Icon from '../Icon';
// import baseStyle from '../FieldBase';

import type { ItemType } from './type';

const Root = styled.div`
  user-select: none;
  position: relative;
`;
const SelectButton = styled.div`
  ${'' /* ${baseStyle} */} width: 100%;
  position: relative;
  display: ${props => (props.filltoContainer ? 'block' : 'inline-block')};
  margin: 0;
  padding: calc(0.533rem - 1px) 1.066rem;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1;
  height: 1.93267rem;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #456297;
  border: 1px solid #c4d2eb;
  z-index: 5;
  outline: 0;
  text-align: left;
`;

const Selector = styled.span``;

const Placeholder = styled(Selector)`
  color: #95acd4;
`;

type Props = {
  placeholder?: string,
  filltoContainer?: boolean,
  items: Array<ItemType>,
};

type State = {
  isOpen: boolean,
  selectedItem: ?ItemType,
};

/**
 * @render react
 * @name Select
 * @description select element
 */
class Select extends React.Component<Props, State> {
  wrapperNode: HTMLElement | null;

  static defaultProps = {
    filltoContainer: true,
    placholder: '',
  };

  state = {
    isOpen: false,
    selectedItem: null,
  };

  onSelect = (item: ItemType) => {
    this.setState({ selectedItem: item });
    this.onToggle(false);
  }

  handleClickOutside() {
    this.onToggle(false);
  };

  onToggle = (value: boolean) => {
    this.setState({ isOpen: value});
  }


  renderSelect = () => {
    if (!this.state.selectedItem) {
      return <Placeholder>{this.props.placeholder}</Placeholder>;
    }
    return <Selector>{this.state.selectedItem.label || this.state.selectedItem.content }</Selector>;
  };

  render() {
    return (
      <Root
        innerRef={ref => {
          this.wrapperNode = ref;
        }}>
        <SelectButton
          onClick={() => this.onToggle(!this.state.isOpen)}
          filltoContainer={this.props.filltoContainer}
          {...this.props}>
          {this.renderSelect()}
          <Icon style={{ float: 'right' }} name="caret-down" size="15" />
        </SelectButton>
        {this.state.isOpen && (
          <Droplist onClick={this.onSelect} items={this.props.items} />
        )}
      </Root>
    );
  }
}

export default ClickOutside(Select);
