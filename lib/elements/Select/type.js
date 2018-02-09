// @flow

import type { Node } from 'react';

export type GroupType = {
  title?: string,
  items: Array<ItemType>,
}

export type ItemType = {
  content?: Node,
  label?: string,
  value?: string | number,
}
