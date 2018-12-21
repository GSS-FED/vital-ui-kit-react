/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import Downshift, { ControllerStateAndHelpers } from 'downshift';

import {
  Input as InputBase,
  InputWrapper,
  RightIconButton,
} from '../input';
import { Dropdown, DropdownItem } from './Dropdown';
import { withContext, Context } from './context';
import { SelectButton, SelectButtonText } from './styled';
import { DownshiftProps } from './DownshiftTypes';
import { CloseIcon } from './icon/CloseIcon';
import { render } from '@vital-ui/react-utils';

export interface SelectProps<T> extends DownshiftProps<T> {
  children: React.ReactNode;
}

interface SelectInput {
  value?: string;
  icon?: any;
  onRightButtonClick?: () => void;
}

const Input = React.forwardRef<any, SelectInput>((props, ref) => (
  <InputWrapper>
    <InputBase
      ref={ref}
      {...props}
      pr={props.value && '2.2rem'}
      // rightIcon={props.value ? props.rightIcon || null : null}
    />
    {props.value &&
      render(props.icon || CloseIcon, RightIconButton, {
        onClick: props.onRightButtonClick,
      })}
  </InputWrapper>
));

const Button: React.SFC<{
  text?: string;
  children?: React.ReactNode;
}> = ({ text = '', children, ...props }) => (
  <Context.Consumer>
    {({ getToggleButtonProps }) => (
      <SelectButton {...props} {...getToggleButtonProps()}>
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

export class Select<T = any> extends React.Component<SelectProps<T>> {
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

  static Button = Button;

  render() {
    const { children, ...props } = this.props;
    return (
      <Downshift {...props}>
        {(options: ControllerStateAndHelpers<T>) => (
          <div>
            <Context.Provider
              // @ts-ignore
              value={{ ...props, ...options }}
            >
              {children}
            </Context.Provider>
          </div>
        )}
      </Downshift>
    );
  }
}
