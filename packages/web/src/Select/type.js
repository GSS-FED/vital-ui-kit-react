// @flow

import type { Node } from 'react';

export type ItemType = {
  content?: Node,
  label?: string,
  value?: string | number,
}

export type GroupType = {
  title?: string,
  items: Array<ItemType>,
}
