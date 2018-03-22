// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';

import { List, ListWrapper } from './styled';
import type { ListItemType, ThemeTyped } from './type';

const InnerWrapper = styled.ul`
  will-change: height;
  background-color: #f7f9fd;
  opacity: ${props => (props.open ? 1 : 0)};
  height: ${props => (props.open ? `${props.childrenHeight}px` : 0)};
  transition: all 0.2s ease;
`;

type Props = {
  children: Node,
  i: number,
  item: ListItemType,
  themed: ThemeTyped,
  onListOpen: (i: number) => void,
  setNodes: (i: number, c: HTMLElement) => void,
  renderChilden: (item: ListItemType) => Node,
};

const ListItemWrapper = ({
  children,
  item,
  i,
  themed,
  onListOpen,
  setNodes,
  renderChilden,
  ...props
}: Props) => (
  <ListWrapper>
    <List
      onClick={() => onListOpen(i)}
      href={item.href}
      themed={themed}
      hasChildren={item.children}
      {...props}
    >
      {children}
    </List>
    <InnerWrapper
      open={item.open}
      childrenHeight={item.childrenHeight}
      innerRef={c => setNodes(i, c)}
    >
      {renderChilden(item)}
    </InnerWrapper>
  </ListWrapper>
);

export default ListItemWrapper;
