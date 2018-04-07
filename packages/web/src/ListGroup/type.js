// @flow

import type { Node } from 'react';

export type ListItemType = {
  content: Node,
  badge?: string | number,
  href?: string,
  id?: string,
  children?: Node | Array<ListItemType>,
  open?: boolean,
  childrenHeight?: number
};

export type ThemeTyped = 'light' | 'dark';
