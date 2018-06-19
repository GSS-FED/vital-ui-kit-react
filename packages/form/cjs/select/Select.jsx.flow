/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';
import ClickOutside from 'react-click-outside';
import Icon from '@vital-ui/react-icon';

import Droplist from './Droplist';

import type { ItemType } from './type';

const Root = styled.div`
  user-select: none;
  position: relative;
`;
const SelectButton = styled.div`
  width: 100%;
  position: relative;
  display: ${props =>
    props.fillToContainer ? 'block' : 'inline-block'};
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
  color: ${({ theme }) => theme.select.button.color};
  border: 1px solid ${({ theme }) => theme.form.borderColor};
  z-index: 5;
  outline: 0;
  text-align: left;
`;

const Selector = styled.span``;

const Placeholder = styled(Selector)`
  color: ${({ theme }) => theme.form.placeholder};
`;

type Props = {
  placeholder?: string,
  fillToContainer?: boolean,
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
  static defaultProps = {
    fillToContainer: true,
    placeholder: '',
  };

  state = {
    isOpen: false,
    selectedItem: null,
  };

  onSelect = (item: ItemType) => {
    this.setState({ selectedItem: item });
    this.onToggle(false);
  };

  onToggle = (value: boolean) => {
    this.setState({ isOpen: value });
  };

  handleClickOutside() {
    this.onToggle(false);
  }

  wrapperNode: ?HTMLElement;

  renderSelect = () => {
    if (!this.state.selectedItem) {
      return <Placeholder>{this.props.placeholder}</Placeholder>;
    }
    return (
      <Selector>
        {this.state.selectedItem.label ||
          this.state.selectedItem.content}
      </Selector>
    );
  };

  render() {
    return (
      <Root
        innerRef={ref => {
          this.wrapperNode = ref;
        }}
      >
        <SelectButton
          onClick={() => this.onToggle(!this.state.isOpen)}
          fillToContainer={this.props.fillToContainer}
          {...this.props}
        >
          {this.renderSelect()}
          <Icon
            style={{ float: 'right' }}
            name="caret-down"
            size="15"
          />
        </SelectButton>
        {this.state.isOpen && (
          <Droplist
            onClick={this.onSelect}
            items={this.props.items}
          />
        )}
      </Root>
    );
  }
}

export default ClickOutside(Select);
