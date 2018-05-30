// @flow

import * as React from 'react';
import styled from 'styled-components';
import type { ItemType } from './type';

const Root = styled.li``;

const Item = styled.div`
  display: block;
  padding: 0.5em 1em 0.5em;
  clear: both;
  line-height: 1;
  color: ${({ theme }) => theme.select.item.color};
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.select.item.hoverBg};
  }
`;

type Props = {
  item: ItemType,
  onClick: (item: ItemType) => void
};

const DroplistItem = ({ item, onClick }: Props) => (
  <Root>
    <Item value={item.value} onClick={() => onClick(item)}>
      {item.content}
    </Item>
  </Root>
);

export default DroplistItem;
