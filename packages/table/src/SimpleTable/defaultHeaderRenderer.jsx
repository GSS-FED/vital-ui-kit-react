/** @flow */
import * as React from 'react';
import styled from 'styled-components';
import SortIndicator from '../SortIndicator';
import type { HeaderRendererParams } from './types';

const Header = styled.span`
  padding-left: 20px;
`;

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
    <Header
      className="ReactVirtualized__Table__headerTruncatedText"
      key="label"
      title={label}
    >
      {label}
    </Header>,
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
