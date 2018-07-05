/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import Select from './Select';
import { withContext, Context } from './context';
import {
  fieldWrapperBase,
  fieldInputBase,
} from '../components/FieldBase';

const InputBase = styled.input`
  ${fieldInputBase};
  border: 0;
  outline: 0;
  height: 1.93267rem;
  width: 100px;
  border-radius: inherit;
`;

const InputWrapper = styled.div`
  ${fieldWrapperBase};
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  overflow: hidden;
`;

const Input = withContext(InputBase, ({ getInputProps }) =>
  getInputProps({
    refKey: 'innerRef',
  }),
);

type State = {
  input: string,
};

type Props = {
  onChange: () => void,
  selection: selectedItem => void,
  children: React.Node,
  values: any,
};

class MultiSelect extends React.Component<Props, State> {
  state = {
    input: '',
    isOpen: false,
  };

  input = React.createRef();

  static Dropdown = Select.Dropdown;

  static DropdownItem = Select.DropdownItem;

  static Input = Input;

  static Context = Context;

  // -------------------------------------
  //   Event Handlers
  // -------------------------------------
  handleChange = item => {
    this.props.onChange([...this.props.values, item]);
    this.setState({ input: '', isOpen: false });
  };

  handleInputClick = () => {
    this.input.current.focus();
    this.setState({
      isOpen: true,
    });
  };

  handleOuterClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleInputChange = evt => {
    this.setState({ input: evt.target.value, isOpen: true });
  };

  handleKeyDown = evt => {
    const { values } = this.props;
    if (
      values.length &&
      !this.state.input.length &&
      evt.keyCode === 8
    ) {
      this.props.onChange(values.slice(0, values.length - 1));
    }
  };

  render() {
    const { children, selection, values, ...props } = this.props;
    return (
      <Select
        inputValue={this.state.input}
        selectedItem={values}
        onOuterClick={this.handleOuterClick}
        isOpen={this.state.isOpen}
        {...props}
        onChange={this.handleChange}
      >
        <InputWrapper onClick={this.handleInputClick}>
          {selection && selection}
          <Input
            innerRef={this.input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
          />
        </InputWrapper>
        {children}
      </Select>
    );
  }
}

export default MultiSelect;
