// @flow

import * as React from 'react';
import styled from 'styled-components';
import DroplistItem from './DroplistItem';

import type { ItemType } from './type';

type Props = {
  items: Array<ItemType>,
  onClick: (Item: ItemType) => any
};

const Root = styled.ul`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 7;
  float: left;
  width: 100%;
  padding: 10px 0;
  margin: 8px 0 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #c4d2eb;
  border-radius: 4px;
`;

const Droplist = ({ items, onClick }: Props) => (
  <Root>
    {items.map((item, i) => (
      <DroplistItem key={i} onClick={onClick} item={item} />
    ))}
  </Root>
);

// {items.map(item =>
// )}
export default Droplist;
