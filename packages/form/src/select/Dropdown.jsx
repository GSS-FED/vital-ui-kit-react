/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import { MenuList, MenuItem } from './styled';
import { Context } from './context';

export const DropdownBase = ({
  getMenuProps,
  isOpen,
  children,
  inputValue,
  shouldRenderItem,
}: ControllerStateAndHelpers) => {
  if (isOpen) {
    return (
      <MenuList {...getMenuProps({ refKey: 'innerRef' })}>
        {React.Children.map(children, child => child).filter(child =>
          shouldRenderItem(child.props.item, inputValue),
        )}
      </MenuList>
    );
  }
  return null;
};

type Props = {
  item: any,
  index: number,
  wrap?: boolean,
  children: React.Node,
};

export const DropdownItem = ({
  item,
  index,
  children,
  wrap,
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
        <MenuItem wrap={wrap} hightlight={highlightedIndex === index}>
          {children}
        </MenuItem>
      </li>
    )}
  </Context.Consumer>
);

DropdownItem.defaultProps = {
  wrap: true,
};
