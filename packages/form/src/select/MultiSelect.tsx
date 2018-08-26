/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import { Select, SelectProps } from './Select';
import { withContext, Context } from './context';
import {
  fieldWrapperBase,
  fieldInputBase,
} from '../components/FieldBase';
import { defaultTheme } from '@vital-ui/react-theme';

const InputBase = styled.input`
  ${fieldInputBase};
  border: 0;
  outline: 0;
  height: 1.93267rem;
  width: 100px;
  border-radius: inherit;
`;

InputBase.defaultProps = {
  theme: defaultTheme,
};

const InputWrapper = styled.div`
  ${fieldWrapperBase};
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  overflow: hidden;
`;

InputWrapper.defaultProps = {
  theme: defaultTheme,
};

const Input = withContext(InputBase, ({ getInputProps }) =>
  getInputProps({
    refKey: 'innerRef',
  }),
);

type State = {
  input: string;
  isOpen: boolean;
};

export interface MultiSelectProps<T> extends SelectProps<T[]> {
  onChange?: (item: T[]) => void;
  selection?:
    | ((selectedItem: T) => React.ReactNode)
    | React.ReactNode;
  children: React.ReactNode;
  values: T[];
}

export class MultiSelect<T> extends React.Component<
  MultiSelectProps<T>,
  State
> {
  static Dropdown: typeof Select.Dropdown = Select.Dropdown;

  static DropdownItem: typeof Select.DropdownItem =
    Select.DropdownItem;

  static Input: typeof Input = Input;

  static Context: typeof Context = Context;

  state: State = {
    input: '',
    isOpen: false,
  };

  input = React.createRef<HTMLInputElement>();

  // -------------------------------------
  //   Event Handlers
  // -------------------------------------
  handleChange = (item: T) => {
    if (this.props.onChange) {
      this.props.onChange([...this.props.values, item]);
    }
    this.setState({ input: '', isOpen: false });
  };

  handleInputClick = () => {
    if (this.input.current) {
      this.input.current.focus();
    }
    this.setState({
      isOpen: true,
    });
  };

  handleOuterClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = evt => {
    this.setState({ input: evt.target.value, isOpen: true });
  };

  handleKeyDown: React.KeyboardEventHandler = evt => {
    const { values } = this.props;
    if (
      values.length &&
      !this.state.input.length &&
      evt.keyCode === 8 &&
      this.props.onChange
    ) {
      this.props.onChange(values.slice(0, values.length - 1));
    }
  };

  render() {
    const { children, selection, values, ...props } = this.props;
    return (
      <Select<T[]>
        inputValue={this.state.input}
        // @ts-ignore
        selectedItem={values}
        onOuterClick={this.handleOuterClick}
        isOpen={this.state.isOpen}
        {...props}
        // @ts-ignore
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
