/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import styled from 'styled-components';

import { Select, SelectProps } from './Select';
import { SelectConsumer } from './context';
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

const Input = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>((props, ref) => (
  <SelectConsumer>
    {({ getInputProps }) => {
      return (
        // @ts-ignore
        <InputBase ref={ref} {...getInputProps({ ...props })} />
      );
    }}
  </SelectConsumer>
));

type State = {
  input: string;
  isOpen: boolean;
};

function isReactElement(
  elem: React.ReactChild | boolean | {},
): elem is React.ReactElement {
  return (
    typeof elem !== 'number' &&
    typeof elem !== 'string' &&
    typeof elem !== 'boolean' &&
    typeof elem !== 'object'
  );
}

export interface MultiSelectProps<T> extends SelectProps<T[]> {
  onChange?: (item: T[]) => void;
  selection?:
    | ((selectedItem: T) => React.ReactNode)
    | React.ReactNode;
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

  handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt,
  ) => {
    this.setState({ input: evt.target.value, isOpen: true });
  };

  handleKeyDown: React.KeyboardEventHandler = (evt) => {
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
    // TODO: use `invariant` to guard the child node
    const child = React.Children.only(children);
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
        {isReactElement(child)
          ? React.cloneElement(
              child,
              {},
              <InputWrapper onClick={this.handleInputClick}>
                {selection && selection}
                <Input
                  ref={this.input}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown}
                />
              </InputWrapper>,
            )
          : child}
        {/* {children} */}
      </Select>
    );
  }
}
