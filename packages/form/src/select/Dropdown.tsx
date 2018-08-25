/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import { ControllerStateAndHelpers } from 'downshift';
import { MenuList, MenuItem } from './styled';
import { Context } from './context';

export const DropdownBase = <T extends {}>({
  getMenuProps,
  isOpen,
  children,
  inputValue,
  shouldRenderItem,
}: ControllerStateAndHelpers<T> & {
  children: React.ReactElement<any>[];
  shouldRenderItem: (item: T, value: string | null) => boolean;
}) => {
  if (isOpen) {
    return (
      <MenuList {...getMenuProps({ refKey: 'innerRef' })}>
        {React.Children.map(children, child => child).filter(
          (child: React.ReactElement<any>) =>
            shouldRenderItem(child.props.item, inputValue),
        )}
      </MenuList>
    );
  }
  return null;
};

type Props = {
  item: any;
  index: number;
  wrap?: boolean;
  children: React.ReactNode;
};

export const DropdownItem = ({
  item,
  index,
  children,
  wrap = true,
  ...props
}: Props) => (
  <Context.Consumer>
    {({ getItemProps, highlightedIndex }) => (
      <li
        {...getItemProps({
          index,
          item,
        })}
        {...props}
      >
        <MenuItem
          isWrap={wrap}
          hightlighted={highlightedIndex === index}
        >
          {children}
        </MenuItem>
      </li>
    )}
  </Context.Consumer>
);
