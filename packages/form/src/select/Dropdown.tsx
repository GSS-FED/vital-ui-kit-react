/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */
import * as React from 'react';
import {
  Popup,
  PopupContent,
  PopupProps,
} from '@vital-ui/react-popup';
import { MenuItem } from './styled';
import { Context } from './context';

export interface DropdownProps extends PopupProps {}

export const Dropdown: React.SFC<DropdownProps> = ({
  popup,
  children,
  ...props
}) => {
  return (
    <Context.Consumer>
      {({ getMenuProps, isOpen }) => (
        <Popup
          {...getMenuProps()}
          {...props}
          popupVisible={isOpen}
          stretch="width"
          popup={
            <PopupContent maxHeight="220px">{popup}</PopupContent>
          }
        >
          {children}
        </Popup>
      )}
    </Context.Consumer>
  );
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
