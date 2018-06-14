/** @flow */
import * as React from 'react';
import SortIndicator from '../SortIndicator';
import type { HeaderRendererParams } from './types';
import { HeaderLabel } from '../styled';

/**
 * Default table header renderer.
 */
export default function defaultHeaderRenderer({
  dataKey,
  label,
  sortBy,
  sortDirection,
}: HeaderRendererParams) {
  const showSortIndicator = sortBy === dataKey;
  const children = [
    <HeaderLabel
      className="ReactVirtualized__Table__headerTruncatedText"
      title={label}
      key="label"
    >
      { label }
    </HeaderLabel>,
  ];

  if (showSortIndicator) {
    children.push(
      <SortIndicator
        key="SortIndicator"
        sortDirection={sortDirection}
      />,
    );
  }

  return children;
}
