/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import Downshift, {
  type ControllerStateAndHelpers,
  type DownshiftProps,
} from 'downshift';

import FieldInput from '../FieldInput';
import InputBase, {
  Props as InputProps,
} from '../input/StatelessInput';
import { DropdownBase, DropdownItem } from './Dropdown';
import { withContext, Context } from './context';
import { SelectButton, SelectButtonText } from './styled';

type Props = {
  children: React.Node,
  label?: React.Node,
  shouldRenderItem?: (item, value) => boolean,
} & DownshiftProps;

const Input = (props: InputProps) => (
  <InputBase
    {...props}
    rightIcon={props.value ? props.rightIcon || null : null}
  />
);

const Button = ({
  text,
  children,
  ...props
}: {
  text?: string,
  children?: React.Node,
}) => (
  <SelectButton {...props}>
    {text && <SelectButtonText>{text}</SelectButtonText>}
    {children}
  </SelectButton>
);

Button.defaultProps = {
  text: undefined,
  children: null
};

const Dropdown = withContext(
  DropdownBase,
  ({ getMenuProps, isOpen, inputValue, shouldRenderItem }) => ({
    getMenuProps,
    isOpen,
    inputValue,
    shouldRenderItem,
  }),
);

class Select extends React.Component<Props> {
  static defaultProps = {
    shouldRenderItem: () => true,
  };

  static Input = withContext(
    Input,
    ({ getInputProps, clearSelection }) => ({
      ...getInputProps(),
      onRightIconClick: clearSelection,
    }),
  );

  static Dropdown = Dropdown;

  static DropdownItem = DropdownItem;

  static Context = Context;

  static Button = withContext(Button, ({ getToggleButtonProps }) =>
    getToggleButtonProps(),
  );

  render() {
    const { children, label, ...props } = this.props;
    return (
      <Downshift {...props}>
        {(options: ControllerStateAndHelpers) => (
          <div>
            <Context.Provider value={{ ...props, ...options }}>
              <FieldInput
                label={label}
                labelProps={options.getLabelProps()}
              >
                {children}
              </FieldInput>
            </Context.Provider>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Select;
