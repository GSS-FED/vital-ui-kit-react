/** @flow */
import * as React from 'react';
import SortIndicator from '../SortIndicator';
import type { HeaderRendererParams } from './types';

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
    <React.Fragment>
      { label }
    </React.Fragment>,
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
