// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import { List } from './styled';
import type { ListItemType, ThemeTyped } from './type';

type Props = {
  children: Node,
  i: number,
  item: ListItemType,
  themed: ThemeTyped,
  onListOpen: (i: number) => void
};

const ListItemWrapper = ({
  children,
  item,
  i,
  themed,
  onListOpen,
  ...props
}: Props) => (
  <List
    onClick={() => onListOpen(i)}
    href={item.href}
    themed={themed}
    hasChildren={item.children}
    {...props}
  >
    {children}
  </List>
);

export default ListItemWrapper;
