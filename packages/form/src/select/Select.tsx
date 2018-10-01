/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import Downshift, { ControllerStateAndHelpers } from 'downshift';

import { Input as InputBase, InputProps } from '../input';
import { Dropdown, DropdownItem } from './Dropdown';
import { withContext, Context } from './context';
import { SelectButton, SelectButtonText } from './styled';
import { DownshiftProps } from './DownshiftTypes';

export interface SelectProps<T> extends DownshiftProps<T> {
  children: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement>(
  (props: InputProps, ref) => (
    <InputBase
      inputRef={ref}
      {...props}
      rightIcon={props.value ? props.rightIcon || null : null}
    />
  ),
);

const Button: React.SFC<{
  text?: string;
  children?: React.ReactNode;
}> = ({ text = '', children, ...props }) => (
  <Context.Consumer>
    {({ getToggleButtonProps }) => (
      <SelectButton {...getToggleButtonProps()} {...props}>
        {<SelectButtonText>{text}</SelectButtonText>}
        {children}
      </SelectButton>
    )}
  </Context.Consumer>
);

Button.defaultProps = {
  text: undefined,
  children: null,
};

export class Select<T> extends React.Component<SelectProps<T>> {
  static Input = withContext(
    Input,
    ({ getInputProps, clearSelection }) => ({
      ...getInputProps(),
      onRightIconClick: clearSelection,
    }),
  );

  static Dropdown: typeof Dropdown = Dropdown;

  static DropdownItem: typeof DropdownItem = DropdownItem;

  static Context: typeof Context = Context;

  static Button: typeof Button = Button;

  render() {
    const { children, ...props } = this.props;
    return (
      <Downshift {...props}>
        {(options: ControllerStateAndHelpers<T>) => (
          <div>
            <Context.Provider value={{ ...props, ...options }}>
              {children}
            </Context.Provider>
          </div>
        )}
      </Downshift>
    );
  }
}
